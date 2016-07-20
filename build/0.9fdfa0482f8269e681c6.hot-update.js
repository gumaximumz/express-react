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

	var _server = __webpack_require__(249);

	var _reactToggle = __webpack_require__(253);

	var _reactToggle2 = _interopRequireDefault(_reactToggle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Editer = function (_React$Component) {
	  _inherits(Editer, _React$Component);

	  function Editer(item) {
	    _classCallCheck(this, Editer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Editer).call(this));

	    _this.id = item.id;
	    return _this;
	  }

	  _createClass(Editer, [{
	    key: 'render',
	    value: function render() {
	      console.log(this.id);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/user/create' },
	          'Create'
	        )
	      );
	    }
	  }]);

	  return Editer;
	}(_react2.default.Component);

	var Datatables = function (_React$Component2) {
	  _inherits(Datatables, _React$Component2);

	  function Datatables() {
	    _classCallCheck(this, Datatables);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Datatables).call(this));

	    _this2.getUrl = '/userserver';
	    return _this2;
	  }

	  _createClass(Datatables, [{
	    key: 'render',
	    value: function render() {
	      var elem = document.createElement('div');
	      document.body.appendChild(elem);
	      var me = this;
	      var option = {
	        processing: true,
	        serverSide: true,
	        ajax: me.getUrl,
	        columns: [{
	          data: 'id'
	        }, {
	          data: 'username'
	        }, {
	          data: 'name'
	        }, {
	          data: 'position'
	        }, {
	          data: 'id',
	          fnCreatedCell: function fnCreatedCell(nTd, sData, oData, iRow, iCol) {
	            (0, _jquery2.default)(nTd).html('<div>' + _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/user/create' },
	              'Create'
	            ) + '</div>');
	          }
	        }]
	      };
	      console.log(option);
	      var datatables = function datatables() {
	        return _react2.default.createElement(
	          'table',
	          { className: 'table table-striped', ref: function ref(elem) {
	              return (0, _jquery2.default)(elem).DataTable(option);
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
	              ),
	              _react2.default.createElement(
	                'th',
	                null,
	                'Edit'
	              )
	            )
	          )
	        );
	      };
	      var dt = new datatables();
	      return _react2.default.createElement(
	        'div',
	        null,
	        dt
	      );
	    }
	  }]);

	  return Datatables;
	}(_react2.default.Component);

	module.exports = Datatables;

/***/ }

})