webpackHotUpdate(0,{

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	var _reactRouter = __webpack_require__(178);

	var _formPartial = __webpack_require__(251);

	var _formPartial2 = _interopRequireDefault(_formPartial);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Create = function (_React$Component) {
	    _inherits(Create, _React$Component);

	    function Create() {
	        _classCallCheck(this, Create);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Create).call(this));

	        var me = _this;
	        _this.state = {
	            id: '',
	            name: '',
	            username: '',
	            position: ''
	        };
	        _this.createUrl = '/edit';
	        _this.data = {
	            state: _this.state,
	            url: _this.createUrl
	        };
	        return _this;
	    }

	    _createClass(Create, [{
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
	                            'Create users'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'panel-body' },
	                        _react2.default.createElement(_formPartial2.default, { item: this.data })
	                    )
	                )
	            );
	        }
	    }]);

	    return Create;
	}(_react2.default.Component);

	module.exports = Create;

/***/ }

})