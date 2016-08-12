(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DebugApp = function () {
  function DebugApp() {
    _classCallCheck(this, DebugApp);

    console.log('Installing DebugApp, use DebgApp.open() to see it in action!');
    this.config = {
      appSrc: 'debug-app/debug.html'
    };
    this.iframe = null;
  }

  _createClass(DebugApp, [{
    key: 'open',
    value: function open() {
      if (this.iframe) {
        this.show();
      } else {
        this._createIframe();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      if (this.iframe) {
        this.iframe.style.display = 'block';
      } else {
        _createIframe();
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      if (this.iframe) {
        this.iframe.style.display = 'none';
      }
    }
  }, {
    key: '_createIframe',
    value: function _createIframe() {
      this.iframe = document.createElement('iframe');
      this.iframe.setAttribute('src', this.config.appSrc);
      this.iframe.setAttribute('frameborder', '0');
      this.iframe.setAttribute('scrolling', 'no');
      this.iframe.style.display = 'block';
      this.iframe.style.width = '100%';
      document.body.appendChild(this.iframe);
    }
  }]);

  return DebugApp;
}();

exports.default = DebugApp;

},{}],2:[function(require,module,exports){
'use strict';

var _debugApp = require('./debug-app');

var _debugApp2 = _interopRequireDefault(_debugApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.debugApp = new _debugApp2.default();

},{"./debug-app":1}]},{},[2]);
