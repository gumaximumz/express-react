webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(41);

	var MyScript = __webpack_require__(175);
	ReactDOM.render(React.createElement(MyScript, null), document.getElementById('content'));
	//ReactDOM.render(<MyScript />, document.getElementById('app'));

	if (true) {
	    __webpack_require__(172).RootInstanceProvider.injectProvider({
	        getRootInstances: function getRootInstances() {
	            return [rootInstance];
	        }
	    });
	}

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// โหลด React มาสร้าง component
	var React = __webpack_require__(4);

	// โหลด ReactDOM มา render component ใส่ DOM
	var ReactDOM = __webpack_require__(41);

	//  สร้าง component ชื่อ Greet
	var Greet = React.createClass({
	    displayName: 'Greet',

	    // component นี้ แสดงผลอย่างไร ?
	    render: function render() {
	        return(
	            // เป็น p.greet ที่มี text เป็น "Hello, SiamHTML!"
	            React.createElement('p', { className: "greet" }, "Hello, Navtech!")
	        );
	    }
	});

/***/ }

})