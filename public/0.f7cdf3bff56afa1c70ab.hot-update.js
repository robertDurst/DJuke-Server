webpackHotUpdate(0,{

/***/ 240:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./frontend/reducers/spotifyReducer.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _types = __webpack_require__(/*! ../actions/types */ 84);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar initialState = {\n  user: '',\n  playlist: '',\n  token: 'BQAkcs8mOzuTQaQ8Hy8k0fpJVL9K6oE4YB0nmOD300H2twN7cwhXm9Alft8KNZHGF6hW1dgXBUsfKvUXCcYEzlGpVRwx3duCx1ziZg5u2nrPPf1TkZ3C6NS-cbXvn-ztt9fifSLo5XdnHxFJrqyh7j_HyIRIXmML4Bk4QANIlSM88J9vK7i8szeUZucIq8MlPhxchHx0H53VG_ElcU2gU9p3HwQy1rxiJcONmzysqJCiI0iNq0m_Qs0QPFAD95hgXGRGrZhOEkslJfSnhzvglI-MeM4XwlY1n_2Ycxsyv0y8VINdavM5rVZLcjIcP2dKbjLTqQ8',\n  confirm_status: false\n};\n\nvar copyState = function copyState(state) {\n  return Object.assign({}, state);\n};\n\nvar spotifyReducer = function spotifyReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  var newState = copyState(state);\n  switch (action.type) {\n    case types.SPOTIFY_MOUNT:\n      newState.user = action.user;\n      newState.playlist = action.playlist;\n      return newState;\n    case types.SPOTIFY_CONFIRM:\n      newState.confirm_status = action.confirm_status;\n      return newState;\n    default:\n      return state;\n  }\n};\n\nexports.default = spotifyReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3JlZHVjZXJzL3Nwb3RpZnlSZWR1Y2VyLmpzP2QzYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjogJycsXG4gIHBsYXlsaXN0OiAnJyxcbiAgdG9rZW46ICdCUUFrY3M4bU96dVRRYVE4SHk4azBmcEpWTDlLNm9FNFlCMG5tT0QzMDBIMnR3Tjdjd2hYbTlBbGZ0OEtOWkhHRjZoVzFkZ1hCVXNmS3ZVWENjWUV6bEdwVlJ3eDNkdUN4MXppWmc1dTJuclBQZjFUa1ozQzZOUy1jYlh2bi16dHQ5ZmlmU0xvNVhkbkh4RkpycXloN2pfSHlJUklYbU1MNEJrNFFBTklsU004OEo5dks3aThzemVVWnVjSXE4TWxQaHhjaEh4MEg1M1ZHX0VsY1UyZ1U5cDNId1F5MXJ4aUpjT05tenlzcUpDaUkwaU5xMG1fUXMwUVBGQUQ5NWhnWEdSR3JaaE9Fa3NsSmZTbmh6dmdsSS1NZU00WHdsWTFuXzJZY3hzeXYweThWSU5kYXZNNXJWWkxjakljUDJkS2JqTFRxUTgnLFxuICBjb25maXJtX3N0YXR1czogZmFsc2UsXG59O1xuXG5jb25zdCBjb3B5U3RhdGUgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKVxufVxuXG5jb25zdCBzcG90aWZ5UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGxldCBuZXdTdGF0ZSA9IGNvcHlTdGF0ZShzdGF0ZSk7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLlNQT1RJRllfTU9VTlQ6XG4gICAgICBuZXdTdGF0ZS51c2VyID0gYWN0aW9uLnVzZXI7XG4gICAgICBuZXdTdGF0ZS5wbGF5bGlzdCA9IGFjdGlvbi5wbGF5bGlzdDtcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICBjYXNlIHR5cGVzLlNQT1RJRllfQ09ORklSTTpcbiAgICAgIG5ld1N0YXRlLmNvbmZpcm1fc3RhdHVzID0gYWN0aW9uLmNvbmZpcm1fc3RhdHVzO1xuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNwb3RpZnlSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3JlZHVjZXJzL3Nwb3RpZnlSZWR1Y2VyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBREE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///240\n");

/***/ })

})