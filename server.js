var express = require('express');
var path = require('path');
var app = express();

// ประกาศให้ Express ใช้งาน View โดยให้ใช้โฟลเดอร์ views เป็นตัวเก็บไฟล์ jade.
app.set('views', path.join(__dirname, 'views'));
 
// ตั้งค่าให้ Express ใช้ View Engine ชื่อว่า Jade
//app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/'));

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/', getIndex);

function getIndex(req, res) {
    res.render('index.html');
    //res.render('index.jade');
}


var server = app.listen(7777, function () {
    var port = server.address().port;
    console.log('Example app listening at port %s', port);
});

module.exports = server;