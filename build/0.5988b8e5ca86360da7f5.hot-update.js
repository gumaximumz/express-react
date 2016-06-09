webpackHotUpdate(0,{

/***/ 95:
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

	        var _reactDom = __webpack_require__(96);

	        var _reactDom2 = _interopRequireDefault(_reactDom);

	        function _interopRequireDefault(obj) {
	            return obj && obj.__esModule ? obj : { default: obj };
	        }

	        var Greet = _react2.default.createClass({
	            displayName: 'Greet',

	            render: function render() {
	                return _react2.default.createElement('h1', { className: 'greet' }, 'Hello, Navtech!');
	            }
	        });

	        var App = _react2.default.createClass({
	            displayName: 'App',

	            getInitialState: function getInitialState() {
	                return {
	                    text: 'Chuck Norris'
	                };
	            },

	            updateText: function updateText(event) {
	                this.setState({
	                    text: event.target.value
	                });
	            },

	            render: function render() {
	                return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, this.state.text), _react2.default.createElement('input', { type: 'text', onChange: this.updateText }));
	            }
	        });

	        _reactDom2.default.render(_react2.default.createElement(Greet, null), document.getElementById('test1'));

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
	                            console.error("Cannot not apply hot update to " + "indextest1.jsx" + ": " + err.message);
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