webpackHotUpdate(0,{

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(241);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Datatables = function (_React$Component) {
	    _inherits(Datatables, _React$Component);

	    function Datatables() {
	        _classCallCheck(this, Datatables);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Datatables).call(this));

	        _this.data = [];
	        _this.config = {
	            style: 'pure',
	            cols: [{ property: "name", editable: true, header: "Name" }, { property: "position", header: "Position" }, { property: "office", header: "Office" }, { property: "age", header: "Age" }]
	        };
	        return _this;
	    }

	    _createClass(Datatables, [{
	        key: 'render',
	        value: function render() {
	            _react2.default.createElement(_react2.default, {
	                config: this.config,
	                datasource: { data: this.data }
	            });
	        }
	    }]);

	    return Datatables;
	}(_react2.default.Component);

	module.exports = Datatables;

/***/ }

})