
var resyClientId = '4fXEkTbqNixiQkyiHKqRRJwxzHbihlOez7qbIJrHn9Z4yKF72dTzj0ZtBbtUfWnp';
var callbackUrl = 'http://secondthought.org/fsq/lucky/';

function oauthResy() {
  /* Attempt to retrieve access token from URL. */
  if ($.bbq.getState('resy_access_token')) {
    token = $.bbq.getState('resy_access_token');
    $.bbq.pushState({resy_access_token: token}, 0);
  } else {
    /* Redirect for resy authentication. */
    var url = 'https://platform.resy.com/authenticate?client_id=' + client_id +
      '&callback=' + callback_url;
    window.location.href = url;
  }  
}

var token = null;
var apihost = null;
var webhost = null;

function getToken() {
  var prod = true;
  if (prod) {
    var client_id = '4BBHBKZ42EWCDMSAYIRRZISCLRC4FK0ESHYLUZX4H3HRDZ50'; //prod
    apihost = 'api.foursquare.com';
    webhost = 'foursquare.com';
  } else {
    var client_id = '4BBHBKZ42EWCDMSAYIRRZISCLRC4FK0ESHYLUZX4H3HRDZ50'; //prod
    apihost = 'api-ahogue-staging.foursquare.com';
    webhost = 'ahogue-staging.foursquare.com';
  }
  var callback_url = 'http://secondthought.org/fsq/lobby/';

  /* Attempt to retrieve access token from URL. */
  if ($.bbq.getState('access_token')) {
    token = $.bbq.getState('access_token');
    $.bbq.pushState({access_token: token}, 0);
  } else {
    /* Redirect for foursquare authentication. */
    var url = 'https://' + webhost + '/oauth2/authenticate?client_id=' + client_id +
      '&response_type=token&redirect_uri=' + callback_url;
    window.location.href = url;
  }
}

function load() {
  loadResyRestaurants();
}

function loadResyRestaurants() {
  var market = 'ny';
  var url = 'https://platform.resy.com/1/reservation/find/' + market + "?callback=?";
  $.getJSON(url, function(data) {
      debug(data);
  });
}
        