var axios = require('axios');
var Spotify_API = require('./SpotifyAPI.js')

// Default song used for confirming connection to Spotify.
var default_song_uri = "spotify:track:6rPO02ozF3bM7NnOV4h6s2";

// Construct a mapping of user_id to pertinent user information
// including a) client token b) playlist id
var spotifyData = {};

function eventListener(songObj, songAddedCB, songOverCB) {
  addNextAndPlay(songObj, songAddedCB, songOverCB)
}

/*
  Adding a track to a spotify playlist is not as straight forward
  as one may think because, since we are simulating a media player,
  we have a few extra actions. The process is as follows:

    1) Get the djuke playlist's tracks
    2) Delete all the tracks. We do this because we only want the "currently
       playing" track to be in the playlist. As of now, we believe that this
       will insure against unexpected track skipping, hopping, etc.
    3) Add the song that is "up next" in the queue.
    4) Call the next track. Even though we deleted the previous song from the
       playlist, the built in Spotify media player is still playing it.
    5) Currently, we are unsure if this is necessary. In theory it garauntees
       that the new song is played.
*/

async function addTrackToPlaylist(user_id, playlist_id, client_token, songURI) {
  console.log('HELLO THIS IS A FUNCTION~!!!!')
  var playlist_uri = "spotify:user:" + user_id + ":playlist:" + playlist_id;

  try {
    var response = await Spotify_API.getUserTracks(client_token, user_id, playlist_id);
    var toDelete = response.data.items.map((x, i) => x.track.uri);
    await Spotify_API.deleteTracks(client_token, user_id, playlist_id, toDelete);
    await Spotify_API.addTrack(client_token, user_id, playlist_id, songURI);
    await Spotify_API.nextSong(client_token);
    await Spotify_API.playSong(client_token);
  } catch (err) {
    console.log("Error", err.response)
  }
}

/*
  The goal of initializing a Spotify user is to:

    a) Create the necessary djuke playlist and initialize it with
       the default song.
    b) Return the playlist URI to the host so that the widget will load it.

  The process for this is as follows:

    1) Get the user info. Using the token we can get the user's id.
    2) Get user's playlists. From here we can check to see if a djuke
       playlist exists. If it doesn't we will create it. After this
       step we will have the playlist id.
    3) As a precautionary, we delete all tracks in this playlist to
       make sure we are starting with a clean playlist.
    4) Add the deault track used for confirming Spotify connection.
    5) Return playlist id and user id to the host.
*/

async function SpotifyUserInitialization(client_token, res) {
  var user_id, playlist_id;

  try {
    var response = await Spotify_API.getUserInfo(client_token);
    user_id = response.data.id;
    response = await Spotify_API.getUserPlaylists(client_token, response);
    var playlists = response.data.items.filter(x => x.name === "djuke");
    if (!playlists) {
      response = await Spotify_API.createPlaylist(client_token, user_id, "DJuke.io, how jukeboxes should be.", "djuke")
      playlist_id = response.data.id;
    } else {
      playlist_id = playlists[0].id;
    }
    response = await Spotify_API.getUserTracks(client_token, user_id, playlist_id);
    var toDelete = response.data.items.map((x, i) => x.track.uri);
    await Spotify_API.deleteTracks(client_token, user_id, playlist_id, toDelete);
    await Spotify_API.addTrack(client_token, user_id, playlist_id, default_song_uri);
    res.json({ user: user_id, playlist: playlist_id });
  } catch (err) {
    // console.log("Error", err);
  }
}

/*
  Before we can play any songs, we must confirm user is "in" the proper playlist.
  This is necessary as of right now because you cannot explicitly control
  what song a user is playing. Thus, our workaround requires a user to be
  in a djuke playlist. Once they are in this playlist, we have total
  control over the playlist and therefore total control over what songs the
  host is listening to and broadcasting. This function checks to see what
  playlist the user is "in" and confirms whether or not it is the expected
  djuke playlist.
*/

async function confirmExpectedPlaylistPlaying(client_token, user_id, playlist_id, expected_uri, res) {
  try {
    var response = await Spotify_API.getPlayerInfo(client_token);

    if (response.data.context !== undefined && response.data.context.uri === expected_uri) {
      spotifyData[user_id] = {
        playlist_id,
        token: client_token,
        user_id
      }
      res.json({ confirm_status: true });
    } else {
      res.json({ confirm_status: false });
    }
  } catch (err) {
    // console.log("Error", err);
  }

}

/*
  Straightforward function that gets information about a song
  and then calls a callback on it.
*/

async function getSongInfo(client_token, song_id, cb) {
  try {
    var response = await Spotify_API.getSongInfo(client_token, song_id);
    cb({
      title: response.data.name,
      duration: response.data.duration_ms,
      artist: response.data.artists.map(x => x.name).join(", "),
      thumbnail: response.data.album.images[0].url,
      id: song_id
    });
  } catch (err) {
    // console.log("Error", err);
  }
}

// Conversion of ms to minutes necessary for display purposes.
function msToMinutes(ms) {
  var totalSeconds = parseInt(ms / 1000);
  var seconds = totalSeconds % 60;
  if (String(seconds).length === 1) {
    seconds = '0' + String(seconds);
  }
  var minutes = (totalSeconds - parseInt(seconds)) / 60;
  console.log('' + minutes + ':' + seconds)
  return '' + minutes + ':' + seconds;
}

function addNextAndPlay(song_object, songAddedCB, songOverCB) {
  var user_id = Object.keys(spotifyData)[0];
  var playlist_id = spotifyData[user_id].playlist_id;
  var token = spotifyData[user_id].token;
  console.log(song_object)
  var song_uri = "spotify:track:" + song_object.id;
  console.log('Playing SPOTIFY:', song_uri)

  addTrackToPlaylist(user_id, playlist_id, token, song_uri)
  songAddedCB(song_object);
  setTimeout(function () {
    console.log('SENDING A SPOTIFY SONG_OVER')
    Spotify_API.pauseSong(token);
    songOverCB(song_object);
  }, (5) * 1000)
}

module.exports = {
  SpotifyUserInitialization,
  confirmExpectedPlaylistPlaying,
  getSongInfo,
  msToMinutes,
  eventListener
}
