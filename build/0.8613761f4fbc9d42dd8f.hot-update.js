webpackHotUpdate(0,{

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(241);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(242);

	__webpack_require__(243);

	__webpack_require__(244);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import zh_cn from '../lib/zh_cn.json';
	//import 'datatables.net-fixedheader';
	//import 'datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.css';

	var DataUrl = 'http://localhost:7777/userserver';

	var elem = document.createElement('div');
	document.body.appendChild(elem);

	var App = function App() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'strong',
	      null,
	      'JSON'
	    ),
	    _react2.default.createElement('table', { className: 'table table-striped', ref: function ref(elem) {
	        return (0, _jquery2.default)(elem).DataTable({
	          processing: true,
	          serverSide: true,
	          ajax: DataUrl,
	          columns: [{
	            data: 'id',
	            title: 'Id'
	          }, {
	            data: 'username',
	            title: 'Username'
	          }, {
	            data: 'name',
	            title: 'Name'
	          }, {
	            data: 'position',
	            title: 'Position'
	          }]
	        });
	      } })
	  );
	};

	(0, _reactDom.render)(_react2.default.createElement(App, null), elem);

/***/ }

})