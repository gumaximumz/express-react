webpackHotUpdate(0,{

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(242);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(243);

	__webpack_require__(244);

	__webpack_require__(245);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	var _reactRouter = __webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Datatables = function (_React$Component) {
	  _inherits(Datatables, _React$Component);

	  function Datatables() {
	    _classCallCheck(this, Datatables);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Datatables).call(this));

	    _this.getUrl = '/userserver';
	    return _this;
	  }

	  _createClass(Datatables, [{
	    key: 'editFormat',
	    value: function editFormat(id) {
	      var me = this;
	      return '<Link to="/user/edit/' + id + '">edit</Link>';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var elem = document.createElement('div');
	      document.body.appendChild(elem);
	      var me = this;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('table', { className: 'table table-striped', ref: function ref(elem) {
	            return (0, _jquery2.default)(elem).DataTable({
	              processing: true,
	              serverSide: true,
	              ajax: me.getUrl,
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
	              }, {
	                data: 'Id',
	                render: function render(data, type, row) {
	                  console.log('Id:' + row.id);
	                  return me.editFormat(row.id);
	                },
	                orderable: false
	              }]
	            });
	          } })
	      );
	    }
	  }]);

	  return Datatables;
	}(_react2.default.Component);

	module.exports = Datatables;

/***/ }

})