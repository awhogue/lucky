// common objects & functions

// Pads the string on the left.
String.prototype.lpad = function(padString, length) {
  var str = this;
  while (str.length < length)
  str = padString + str;
  return str;
}
 
// Pads the string on the right.
String.prototype.rpad = function(padString, length) {
  var str = this;
  while (str.length < length)
  str = str + padString;
  return str;
}

// Optionally truncates the string, adding '...' to the end if it's been truncated.
String.prototype.truncate = function(length) {
  var str = this;
  if (str.length > length) {
    return str.substr(0, length) + '...';
  } else {
    return str;
  }
}

function LL(lat, lng) {
  this.lat = lat;
  this.lng = lng;

  this.toString = function() {
    return this.lat + ',' + this.lng;
  }

  // return the distance in degrees.
  this.distance = function(other) {
    var latD = other.lat - this.lat;
    var lngD = other.lng - this.lng;
    return Math.sqrt(latD*latD + lngD*lngD);
  }
}

function debug(obj) {
  console.log(new Date().toUTCString() + ": " + obj);
}

function defined(x) { return (typeof x !== 'undefined') }

function errorFunc(data, textStatus, errorThrown) {
  debug('Error: ' + JSON.stringify(data));
}
