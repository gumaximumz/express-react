
// โหลด React มาสร้าง component
var React = require('react');
 
// โหลด ReactDOM มา render component ใส่ DOM
var ReactDOM = require('react-dom');
 
//  สร้าง component ชื่อ Greet
var Greet = React.createClass({
    // component นี้ แสดงผลอย่างไร ?
    render: function() {
        return (
            // เป็น p.greet ที่มี text เป็น "Hello, SiamHTML!"
            React.createElement(
                'p', 
                {className: "greet"}, 
                "Hello Navtech, i'm js!"
            )
        );
    }
});
 
// แสดงผล component ชื่อ Greet ข้างใน #content
ReactDOM.render(
    React.createElement(Greet, null), 
    document.getElementById('content')
);