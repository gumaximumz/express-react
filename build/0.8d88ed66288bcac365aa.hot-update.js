webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* REACT HOT LOADER */if (true) {
	    (function () {
	        var ReactHotAPI = __webpack_require__(5),
	            RootInstanceProvider = __webpack_require__(13),
	            ReactMount = __webpack_require__(15),
	            React = __webpack_require__(79);module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () {
	            return RootInstanceProvider.getRootInstances(ReactMount);
	        }, React);
	    })();
	}try {
	    (function () {

	        'use strict';

	        var _createClass = function () {
	            function defineProperties(target, props) {
	                for (var i = 0; i < props.length; i++) {
	                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	                }
	            }return function (Constructor, protoProps, staticProps) {
	                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	            };
	        }();

	        var _react = __webpack_require__(79);

	        var _react2 = _interopRequireDefault(_react);

	        var _reactDom = __webpack_require__(96);

	        var _reactDom2 = _interopRequireDefault(_reactDom);

	        function _interopRequireDefault(obj) {
	            return obj && obj.__esModule ? obj : { default: obj };
	        }

	        function _classCallCheck(instance, Constructor) {
	            if (!(instance instanceof Constructor)) {
	                throw new TypeError("Cannot call a class as a function");
	            }
	        }

	        function _possibleConstructorReturn(self, call) {
	            if (!self) {
	                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	            }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	        }

	        function _inherits(subClass, superClass) {
	            if (typeof superClass !== "function" && superClass !== null) {
	                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	        }

	        var Menu = function (_React$Component) {
	            _inherits(Menu, _React$Component);

	            function Menu() {
	                _classCallCheck(this, Menu);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).call(this));
	            }

	            _createClass(Menu, [{
	                key: 'render',
	                value: function render() {
	                    return _react2.default.createElement('ul', { 'class': 'nav navbar-nav', id: 'menu' }, _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'home' }, 'Home')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: 'nested-animations' }, 'Nested Animations')));
	                }
	            }]);

	            return Menu;
	        }(_react2.default.Component);

	        var App = function (_React$Component2) {
	            _inherits(App, _React$Component2);

	            function App() {
	                _classCallCheck(this, App);

	                var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

	                _this2.state = {
	                    text: 'Hello, Navtech!'
	                };
	                return _this2;
	            }

	            _createClass(App, [{
	                key: 'updateText',
	                value: function updateText(event) {
	                    this.setState({
	                        text: event.target.value
	                    });
	                }
	            }, {
	                key: 'render',
	                value: function render() {
	                    return _react2.default.createElement('div', null, _react2.default.createElement('input', { type: 'text', onChange: this.updateText.bind(this) }), _react2.default.createElement('h1', null, this.state.text));
	                }
	            }]);

	            return App;
	        }(_react2.default.Component);

	        _reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('test1'));

	        if (true) {
	            __webpack_require__(186).RootInstanceProvider.injectProvider({
	                getRootInstances: function getRootInstances() {
	                    return [rootInstance];
	                }
	            });
	        }

	        /* REACT HOT LOADER */
	    }).call(undefined);
	} finally {
	    if (true) {
	        (function () {
	            var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false;if (module.exports && module.makeHot) {
	                var makeExportsHot = __webpack_require__(183);if (makeExportsHot(module, __webpack_require__(79))) {
	                    foundReactClasses = true;
	                }var shouldAcceptModule = true && foundReactClasses;if (shouldAcceptModule) {
	                    module.hot.accept(function (err) {
	                        if (err) {
	                            console.error("Cannot not apply hot update to " + "app.js" + ": " + err.message);
	                        }
	                    });
	                }
	            }module.hot.dispose(function (data) {
	                data.makeHot = module.makeHot;data.foundReactClasses = foundReactClasses;
	            });
	        })();
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})