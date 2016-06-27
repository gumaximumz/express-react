webpackHotUpdate(0,{

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(241);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(242);

	__webpack_require__(243);

	__webpack_require__(244);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import zh_cn from '../lib/zh_cn.json';
	//import 'datatables.net-fixedheader';
	//import 'datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.css';

	var Datatables = function (_React$Component) {
	  _inherits(Datatables, _React$Component);

	  function Datatables() {
	    _classCallCheck(this, Datatables);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Datatables).call(this));

	    _this.getUrl = 'http://localhost:7777/users';
	    _this._url = null;
	    _this.btnSearch = (0, _jquery2.default)('#btn_search');
	    _this.getExcelUrl = null;
	    _this.rowData = null;
	    _this.dt = null;
	    var me = _this;
	    return _this;
	  }

	  _createClass(Datatables, [{
	    key: 'render',
	    value: function render() {
	      var me = this;
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
	                dom: 'Zlfrtip',
	                order: [[0, 'asc']],
	                ajax: {
	                  url: DataUrl,
	                  type: "POST",
	                  contentType: 'application/json',
	                  data: function data(_data) {
	                    return me.postData(_data);
	                  }
	                },
	                searching: false,
	                deferRender: true,
	                scrollX: true,
	                scrollY: "50vh",
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
	      return _react2.default.createElement(App, null), elem;
	    }
	  }, {
	    key: 'url',
	    get: function get() {
	      return this._url;
	    },
	    set: function set(value) {
	      this._url = value;
	    }
	  }]);

	  return Datatables;
	}(_react2.default.Component);

	module.exports = Datatables;

/***/ }

})