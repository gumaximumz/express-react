webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MyScript = __webpack_require__(171);

	//ReactDOM.render(<MyScript />, document.getElementById('app'));

	if (true) {
	    __webpack_require__(172).RootInstanceProvider.injectProvider({
	        getRootInstances: function getRootInstances() {
	            return [rootInstance];
	        }
	    });
	}

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(41);

	var Greet = React.createClass({
	    displayName: 'Greet',

	    render: function render() {
	        return React.createElement(
	            'p',
	            { className: 'greet' },
	            'Hello, SiamHTML!'
	        );
	    }
	});

	ReactDOM.render(React.createElement(Greet, null), document.getElementById('content'));

/***/ }

})