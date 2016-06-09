webpackHotUpdate(0,{

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

	// แสดงผล component ชื่อ Greet ข้างใน #content
	ReactDOM.render(React.createElement(Greet, null), document.getElementById('content'));

/***/ }

})