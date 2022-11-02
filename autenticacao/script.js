var stateKey = 'spotify_auth_state';
      /**
       * Obtains parameters from the hash of the URL
       * @return Object
       */
function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while (e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

function generateRandomString(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

function loggar() {

  var client_id = '1ab0652972a0487aaac4a411b3f4fb78'; // Your client id
  var redirect_uri = 'http://localhost:8001'; // Your redirect uri

  var state = generateRandomString(16);

  localStorage.setItem(stateKey, state);
  var scope = 'user-read-private user-read-email';

  var url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(client_id);
  url += '&scope=' + encodeURIComponent(scope);
  url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
  url += '&state=' + encodeURIComponent(state);

  window.location = url;
}