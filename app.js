
// var express = require('express'); // Express web server framework
// var app = express();
// app.use(express.static(__dirname + '/public'));
// console.log('Listening on 8001');
// app.listen(8001);

import SpotifyWebApi from "spotify-web-api-js";

var spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken(spotifyApi.getAccessToken());

// const app = document.getElementById("app");

console.log(spotifyApi.getMe());
console.log(spotifyApi.getMyTopArtists());
console.log(spotifyApi.getMyTopTracks());