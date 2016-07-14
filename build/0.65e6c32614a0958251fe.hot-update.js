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

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(FormPartial).call(this));
	    }

	    _createClass(FormPartial, [{
	        key: 'getInitialState',
	        value: function getInitialState() {
	            return { author: '', text: '' };
	        }
	    }, {
	        key: 'handleAuthorChange',
	        value: function handleAuthorChange(e) {
	            this.setState({ author: e.target.value });
	        }
	    }, {
	        key: 'handleTextChange',
	        value: function handleTextChange(e) {
	            this.setState({ text: e.target.value });
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            var author = this.state.author.trim();
	            var text = this.state.text.trim();
	            if (!text || !author) {
	                return;
	            }
	            // TODO: send request to the server

	            this.setState({ author: '', text: '' });
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
	                                    value: this.state.author,
	                                    onChange: this.handleAuthorChange
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
	                                    placeholder: 'Say something...',
	                                    value: this.state.text,
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
	                                    placeholder: 'Say something...',
	                                    value: this.state.text,
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