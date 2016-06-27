webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

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

	        var _react = __webpack_require__(79);

	        var _react2 = _interopRequireDefault(_react);

	        var _reactDom = __webpack_require__(95);

	        var _reactAddonsCssTransitionGroup = __webpack_require__(182);

	        var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	        var _reactRouter = __webpack_require__(189);

	        __webpack_require__(250);

	        function _interopRequireDefault(obj) {
	            return obj && obj.__esModule ? obj : { default: obj };
	        }

	        var App = function App(_ref) {
	            var children = _ref.children;
	            var pathname = _ref.location.pathname;

	            // Only take the first-level part of the path as key, instead of the whole path.
	            var key = pathname.split('/')[1] || 'root';

	            return _react2.default.createElement('div', null, _react2.default.createElement('ul', null, _react2.default.createElement(_reactRouter.Link, { to: '/hello' }, 'Hello')), _react2.default.createElement('ul', null, _react2.default.createElement(_reactRouter.Link, { to: '/updateText' }, 'Update Text')), _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, {
	                component: 'div', transitionName: 'swap',
	                transitionEnterTimeout: 500, transitionLeaveTimeout: 500
	            }, _react2.default.cloneElement(children || _react2.default.createElement('div', null), { key: key })));
	        };

	        var Hello = function Hello(_ref2) {
	            var children = _ref2.children;
	            var pathname = _ref2.location.pathname;
	            return _react2.default.createElement('div', { className: 'Image' }, _react2.default.createElement('h1', null, 'Hello'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/hello/tab1' }, 'Tab 1')), _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/hello/tab2' }, 'Tab 2'))), _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, {
	                component: 'div', transitionName: 'example',
	                transitionEnterTimeout: 500, transitionLeaveTimeout: 500
	            }, _react2.default.cloneElement(children || _react2.default.createElement('div', null), { key: pathname })));
	        };

	        var UpdateText = function UpdateText(_ref3) {
	            var children = _ref3.children;
	            var pathname = _ref3.location.pathname;
	            return _react2.default.createElement('div', { className: 'Image' }, _react2.default.createElement('h1', null, 'Page 2'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/updateText/tab1' }, 'Tab 1')), _react2.default.createElement('li', null, _react2.default.createElement(_reactRouter.Link, { to: '/updateText/tab2' }, 'Tab 2'))), _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, {
	                component: 'div', transitionName: 'example',
	                transitionEnterTimeout: 500, transitionLeaveTimeout: 500
	            }, _react2.default.cloneElement(children || _react2.default.createElement('div', null), { key: pathname })));
	        };

	        var Tab1 = function Tab1() {
	            return _react2.default.createElement('div', { className: 'Image' }, _react2.default.createElement('h2', null, 'Tab 1'), _react2.default.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
	        };

	        var Tab2 = function Tab2() {
	            return _react2.default.createElement('div', { className: 'Image' }, _react2.default.createElement('h2', null, 'Tab 2'), _react2.default.createElement('p', null, 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
	        };

	        (0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory }, _react2.default.createElement(_reactRouter.Route, { path: '/', component: App }, _react2.default.createElement(_reactRouter.Route, { path: 'hello', component: Hello }, _react2.default.createElement(_reactRouter.Route, { path: 'tab1', component: Tab1 }), _react2.default.createElement(_reactRouter.Route, { path: 'tab2', component: Tab2 })), _react2.default.createElement(_reactRouter.Route, { path: 'updateText', component: UpdateText }, _react2.default.createElement(_reactRouter.Route, { path: 'tab1', component: Tab1 }), _react2.default.createElement(_reactRouter.Route, { path: 'tab2', component: Tab2 })))), document.getElementById('menu'));

	        /*ReactDOM.render(<App />,
	            document.getElementById('test1')
	        );*/

	        if (true) {
	            __webpack_require__(254).RootInstanceProvider.injectProvider({
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
	                var makeExportsHot = __webpack_require__(255);if (makeExportsHot(module, __webpack_require__(79))) {
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