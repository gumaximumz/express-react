webpackHotUpdate(0,{

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(252);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(253);

	__webpack_require__(254);

	__webpack_require__(255);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import zh_cn from '../lib/zh_cn.json';
	//import 'datatables.net-fixedheader';
	//import 'datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.css';

	var DataUrl = 'http://localhost:7777/users';

	var elem = document.createElement('div');
	document.body.appendChild(elem);

	_jquery2.default.extend(true, _jquery2.default.fn.dataTable.defaults, {
	  //language: {
	  //url: require('../lib/zh_cn.json')
	  //}
	});

	var App = function App() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'strong',
	      null,
	      'JSON'
	    ),
	    _react2.default.createElement(
	      'table',
	      { className: 'table table-striped', ref: function ref(elem) {
	          return (0, _jquery2.default)(elem).DataTable({
	            processing: true,
	            serverSide: true,
	            ajax: '/users'
	          });
	        } },
	      _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'th',
	            null,
	            'Id'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Username'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Name'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Position'
	          )
	        )
	      )
	    )
	  );
	};

	(0, _reactDom.render)(_react2.default.createElement(App, null), elem);

/***/ }

})