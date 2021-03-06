webpackHotUpdate(0,{

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	var _dt = __webpack_require__(241);

	var _dt2 = _interopRequireDefault(_dt);

	var _search = __webpack_require__(249);

	var _search2 = _interopRequireDefault(_search);

	var _reactRouter = __webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Index = function (_React$Component) {
	  _inherits(Index, _React$Component);

	  function Index() {
	    _classCallCheck(this, Index);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Index).call(this));
	  }

	  _createClass(Index, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2.default.createElement(
	              'h4',
	              null,
	              'Search users'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2.default.createElement(_search2.default, null)
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2.default.createElement(
	              'div',
	              { 'class': 'row' },
	              _react2.default.createElement(
	                'div',
	                { 'class': 'col-md-6 col-xs-6' },
	                _react2.default.createElement(
	                  'h4',
	                  null,
	                  'Users list'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { 'class': 'col-md-6 col-xs-6 text-right' },
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/user/create' },
	                  'Create'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2.default.createElement(_dt2.default, null)
	          )
	        )
	      );
	    }
	  }]);

	  return Index;
	}(_react2.default.Component);

	module.exports = Index;

/***/ }

})