/**
 * Module dependencies
 */

var querystring = require('querystring');
var assign = require('object-assign');
var once = require('once');

/**
 * Export `open`
 */

module.exports = open;

/**
 * Initialize `open`
 */

function open(url, options, fn) {
  options = options || {};

  if (2 == arguments.length) {
    fn = options;
    options = {};
  }

  var str = stringify(configure(options));
  var popup = window.open(url, options.name || '', str);
  popup.focus();
  poll(popup, fn);
  return popup;
}

/**
 * Poll
 */

function poll(popup, fn) {
  var done = once(fn);

  var intervalId = setInterval(function polling() {
    if (popup.closed) {
      clearInterval(intervalId);
      return;
    }
    try {
      var documentOrigin = document.location.host;
      var popupWindowOrigin = popup.location.host;
    } catch (e) {};

    if (popupWindowOrigin === documentOrigin && (popup.location.search || popup.location.hash)) {
      var queryParams = popup.location.search.substring(1).replace(/\/$/, '');
      var hashParams = popup.location.hash.substring(1).replace(/[\/$]/, '');
      var hash = querystring.parse(hashParams);
      var qs = querystring.parse(queryParams);

      qs = assign(qs, hash);

      if (qs.error) {
        clearInterval(intervalId);
        popup.close();
        done(new Error(qs.error));
      } else {
        clearInterval(intervalId);
        popup.close();
        done(null, qs);
      }
    }
  }, 35);
}

/**
 * Configure the popup
 */

function configure(options) {
  var width = options.width || 500;
  var height = options.height || 500;
  return assign({
    width: width,
    height: height,
    left: window.screenX + ((window.outerWidth - width) / 2),
    top: window.screenY + ((window.outerHeight - height) / 2.5)
  }, options || {});
}

/**
 * Stringify
 */

function stringify(obj) {
  var parts = [];
  for (var key in obj) {
    parts.push(key + '=' + obj[key]);
  }
  return parts.join(',');
}
