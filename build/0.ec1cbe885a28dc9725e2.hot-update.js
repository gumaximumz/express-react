webpackHotUpdate(0,{

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(245);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _datatables = __webpack_require__(246);

	var _datatables2 = _interopRequireDefault(_datatables);

	var _datatables3 = __webpack_require__(247);

	var _datatables4 = _interopRequireDefault(_datatables3);

	__webpack_require__(248);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Datatables = function (_React$Component) {
	    _inherits(Datatables, _React$Component);

	    function Datatables() {
	        _classCallCheck(this, Datatables);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Datatables).call(this));

	        _this.render();
	        return _this;
	    }

	    _createClass(Datatables, [{
	        key: "init",
	        value: function init() {
	            this.createDt();
	        }
	    }, {
	        key: "createDt",
	        value: function createDt() {
	            var me = this;
	            (0, _jquery2.default)('#example').DataTable({
	                processing: true,
	                serverSide: true,
	                ajax: ""
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "table",
	                    { id: "example", "class": "table table-striped table-bordered", cellspacing: "0", width: "100%" },
	                    React.createElement(
	                        "thead",
	                        null,
	                        React.createElement(
	                            "tr",
	                            null,
	                            React.createElement(
	                                "th",
	                                null,
	                                "First name"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "Last name"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "Position"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "Office"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "Start date"
	                            ),
	                            React.createElement(
	                                "th",
	                                null,
	                                "Salary"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Datatables;
	}(React.Component);

	module.exports = Datatables;

/***/ }

})