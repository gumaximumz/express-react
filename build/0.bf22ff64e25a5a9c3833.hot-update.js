webpackHotUpdate(0,{

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormPartial = function (_React$Component) {
	    _inherits(FormPartial, _React$Component);

	    function FormPartial() {
	        _classCallCheck(this, FormPartial);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormPartial).call(this));

	        _this.state = {
	            id: '',
	            name: '',
	            username: '',
	            position: ''
	        };
	        return _this;
	    }

	    _createClass(FormPartial, [{
	        key: 'getInitialState',
	        value: function getInitialState() {
	            return {
	                id: '',
	                name: '',
	                username: '',
	                position: ''
	            };
	        }
	    }, {
	        key: 'handleTextChange',
	        value: function handleTextChange(e) {
	            console.log('handleTextChange=' + e.target.value);
	            this.setState({
	                name: e.target.value
	            });
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            console.log('handleSubmit=' + e);
	            e.preventDefault();
	            console.log('this.state=' + this.state);
	            var name = this.state.name.trim();
	            var username = this.state.username.trim();
	            var position = this.state.position.trim();
	            console.log('name=' + name);
	            console.log('username=' + username);
	            console.log('position=' + position);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'form',
	                    { className: 'commentForm', onSubmit: this.handleSubmit },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-6' },
	                            _react2.default.createElement(
	                                'label',
	                                { className: 'control-label col-md-4' },
	                                'Name'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { 'class': 'col-md-8' },
	                                _react2.default.createElement('input', {
	                                    type: 'text',
	                                    placeholder: 'Your name',
	                                    value: this.state.name,
	                                    onChange: this.handleTextChange
	                                })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-6' },
	                            _react2.default.createElement(
	                                'label',
	                                { className: 'control-label col-md-4' },
	                                'Username'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { 'class': 'col-md-8' },
	                                _react2.default.createElement('input', {
	                                    type: 'text',
	                                    placeholder: 'Your username',
	                                    value: this.state.username,
	                                    onChange: this.handleTextChange
	                                })
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-6' },
	                            _react2.default.createElement(
	                                'label',
	                                { className: 'control-label col-md-4' },
	                                'Position'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { 'class': 'col-md-8' },
	                                _react2.default.createElement('input', {
	                                    type: 'text',
	                                    placeholder: 'Your position',
	                                    value: this.state.position,
	                                    onChange: this.handleTextChange
	                                })
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-md-6 text-right' },
	                            _react2.default.createElement('input', { type: 'submit', value: 'Post' })
	                        ),
	                        _react2.default.createElement('div', { className: 'col-md-6' })
	                    )
	                )
	            );
	        }
	    }]);

	    return FormPartial;
	}(_react2.default.Component);

	module.exports = FormPartial;

/***/ }

})