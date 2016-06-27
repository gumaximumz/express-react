webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	var _reactAddonsCssTransitionGroup = __webpack_require__(171);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _reactRouter = __webpack_require__(178);

	var _updatetext = __webpack_require__(239);

	var _updatetext2 = _interopRequireDefault(_updatetext);

	var _index = __webpack_require__(254);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(248);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Menu = function Menu(_ref) {
	    var children = _ref.children;
	    var pathname = _ref.location.pathname;

	    // Only take the first-level part of the path as key, instead of the whole path.
	    var key = pathname.split('/')[1] || 'root';
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'nav',
	            { className: 'navbar navbar-inverse navbar-static-top' },
	            _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'a',
	                    { className: 'navbar-brand active' },
	                    'Express HTML'
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'nav navbar-nav' },
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/hello' },
	                            'Hello'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/updateText' },
	                            'Update Text'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: '/datatable' },
	                            'Datatable'
	                        )
	                    )
	                )
	            )
	        ),
	        _react2.default.createElement(
	            'div',
	            { 'class': 'form-horizontal' },
	            _react2.default.createElement(
	                _reactAddonsCssTransitionGroup2.default,
	                {
	                    component: 'div', transitionName: 'swap', className: 'container body-content form-control-static',
	                    transitionEnterTimeout: 500, transitionLeaveTimeout: 500
	                },
	                _react2.default.cloneElement(children || _react2.default.createElement('div', null), { key: key })
	            )
	        )
	    );
	};

	var Hello = function Hello(_ref2) {
	    var children = _ref2.children;
	    var pathname = _ref2.location.pathname;

	    var key = pathname.split('/hello')[1] || 'root';
	    return _react2.default.createElement(
	        'div',
	        { className: 'Image' },
	        _react2.default.createElement(
	            'h1',
	            null,
	            'Hello'
	        ),
	        _react2.default.createElement(
	            'ul',
	            null,
	            _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/hello/tab1' },
	                    'Tab 1'
	                )
	            ),
	            _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/hello/tab2' },
	                    'Tab 2'
	                )
	            )
	        ),
	        _react2.default.createElement(
	            _reactAddonsCssTransitionGroup2.default,
	            {
	                component: 'div', transitionName: 'example',
	                transitionEnterTimeout: 500, transitionLeaveTimeout: 500
	            },
	            _react2.default.cloneElement(children || _react2.default.createElement('div', null), { key: pathname })
	        )
	    );
	};

	var Tab1 = function Tab1() {
	    return _react2.default.createElement(
	        'div',
	        { className: 'Image' },
	        _react2.default.createElement(
	            'h2',
	            null,
	            'Hello, Navtech'
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	        )
	    );
	};

	var Tab2 = function Tab2() {
	    return _react2.default.createElement(
	        'div',
	        { className: 'Image' },
	        _react2.default.createElement(
	            'h2',
	            null,
	            'Hi, B.Support'
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	        )
	    );
	};

	var UpdateText = _updatetext2.default;
	var DataTable = _index2.default;

	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: Menu },
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: 'hello', component: Hello },
	            _react2.default.createElement(_reactRouter.Route, { path: 'tab1', component: Tab1 }),
	            _react2.default.createElement(_reactRouter.Route, { path: 'tab2', component: Tab2 })
	        ),
	        _react2.default.createElement(_reactRouter.Route, { path: 'updateText', component: UpdateText }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'datatable', component: DataTable })
	    )
	), document.getElementById('app'));

	if (true) {
	    __webpack_require__(250).RootInstanceProvider.injectProvider({
	        getRootInstances: function getRootInstances() {
	            return [rootInstance];
	        }
	    });
	}

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	var _dt = __webpack_require__(240);

	var _dt2 = _interopRequireDefault(_dt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var index = function (_React$Component) {
	  _inherits(index, _React$Component);

	  function index() {
	    _classCallCheck(this, index);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(index).call(this));
	  }

	  _createClass(index, [{
	    key: 'render',
	    value: function render() {
	      var me = this;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _dt2.default
	      );
	    }
	  }]);

	  return index;
	}(_react2.default.Component);

	module.exports = index;

/***/ }

})