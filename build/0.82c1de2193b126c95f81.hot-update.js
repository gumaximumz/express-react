webpackHotUpdate(0,{

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(241);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	var _dt = __webpack_require__(240);

	var _dt2 = _interopRequireDefault(_dt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var index = function (_React$Component) {
	  _inherits(index, _React$Component);

	  function index() {
	    _classCallCheck(this, index);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(index).call(this));
	  }

	  _createClass(index, [{
	    key: 'render',
	    value: function render() {
	      var dt = document.createElement('div');
	      document.body.appendChild(dt);
	      var me = this;
	      return _react2.default.createElement(
	        'div',
	        null,
	        '$( "div" ).html( "',
	        _react2.default.createElement(
	          'span',
	          { 'class': 'red' },
	          'Hello ',
	          _react2.default.createElement(
	            'b',
	            null,
	            'Again'
	          )
	        ),
	        '" );'
	      ), document.getElementById('dt');
	    }
	  }]);

	  return index;
	}(_react2.default.Component);

	module.exports = index;

/***/ }

})