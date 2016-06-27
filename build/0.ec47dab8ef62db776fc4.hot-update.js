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

	__webpack_require__(239);

	var _indextest = __webpack_require__(243);

	var _indextest2 = _interopRequireDefault(_indextest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(_ref) {
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
	            _reactAddonsCssTransitionGroup2.default,
	            {
	                component: 'div', transitionName: 'swap', className: 'container body-content form-control-static',
	                transitionEnterTimeout: 500, transitionLeaveTimeout: 500
	            },
	            _react2.default.cloneElement(children || _react2.default.createElement('div', null), { key: key })
	        )
	    );
	};

	var Hello = function Hello(_ref2) {
	    var children = _ref2.children;
	    var pathname = _ref2.location.pathname;
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

	var UpdateText = _indextest2.default;

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

	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: App },
	        _react2.default.createElement(
	            _reactRouter.Route,
	            { path: 'hello', component: Hello },
	            _react2.default.createElement(_reactRouter.Route, { path: 'tab1', component: Tab1 }),
	            _react2.default.createElement(_reactRouter.Route, { path: 'tab2', component: Tab2 })
	        ),
	        _react2.default.createElement(_reactRouter.Route, { path: 'updateText', component: UpdateText })
	    )
	), document.getElementById('menu'));

	if (true) {
	    __webpack_require__(244).RootInstanceProvider.injectProvider({
	        getRootInstances: function getRootInstances() {
	            return [rootInstance];
	        }
	    });
	}

/***/ }

})