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

	var _server = __webpack_require__(258);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Editer = function (_React$Component) {
	  _inherits(Editer, _React$Component);

	  function Editer(item) {
	    _classCallCheck(this, Editer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Editer).call(this));

	    _this.id = item.it;
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
	      var _this3 = this;

	      var elem = document.createElement('div');
	      document.body.appendChild(elem);
	      var me = this;

	      var datatables = function datatables() {
	        return _react2.default.createElement(
	          'table',
	          { className: 'table table-striped', ref: function ref(elem) {
	              return (0, _jquery2.default)(elem).DataTable({
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
	                  render: function render(data, type, row) {
	                    var test = _react2.default.createElement(Editer, { item: _this3.data });
	                    console.log(test);
	                    return test;
	                  }
	                }]
	              });
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

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(259);


/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMServer
	 */

	'use strict';

	var ReactDefaultInjection = __webpack_require__(46);
	var ReactServerRendering = __webpack_require__(260);
	var ReactVersion = __webpack_require__(39);

	ReactDefaultInjection.inject();

	var ReactDOMServer = {
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  version: ReactVersion
	};

	module.exports = ReactDOMServer;

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerRendering
	 */
	'use strict';

	var ReactDOMContainerInfo = __webpack_require__(164);
	var ReactDefaultBatchingStrategy = __webpack_require__(137);
	var ReactElement = __webpack_require__(11);
	var ReactInstrumentation = __webpack_require__(21);
	var ReactMarkupChecksum = __webpack_require__(166);
	var ReactReconciler = __webpack_require__(65);
	var ReactServerBatchingStrategy = __webpack_require__(261);
	var ReactServerRenderingTransaction = __webpack_require__(131);
	var ReactUpdates = __webpack_require__(62);

	var emptyObject = __webpack_require__(29);
	var instantiateReactComponent = __webpack_require__(122);
	var invariant = __webpack_require__(10);

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToStringImpl(element, makeStaticMarkup) {
	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

	    transaction = ReactServerRenderingTransaction.getPooled(makeStaticMarkup);

	    return transaction.perform(function () {
	      if (process.env.NODE_ENV !== 'production') {
	        ReactInstrumentation.debugTool.onBeginFlush();
	      }
	      var componentInstance = instantiateReactComponent(element);
	      var markup = ReactReconciler.mountComponent(componentInstance, transaction, null, ReactDOMContainerInfo(), emptyObject);
	      if (process.env.NODE_ENV !== 'production') {
	        ReactInstrumentation.debugTool.onUnmountComponent(componentInstance._debugID);
	        ReactInstrumentation.debugTool.onEndFlush();
	      }
	      if (!makeStaticMarkup) {
	        markup = ReactMarkupChecksum.addChecksumToMarkup(markup);
	      }
	      return markup;
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	  }
	}

	/**
	 * Render a ReactElement to its initial HTML. This should only be used on the
	 * server.
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostring
	 */
	function renderToString(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : invariant(false) : void 0;
	  return renderToStringImpl(element, false);
	}

	/**
	 * Similar to renderToString, except this doesn't create extra DOM attributes
	 * such as data-react-id that React uses internally.
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup
	 */
	function renderToStaticMarkup(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : invariant(false) : void 0;
	  return renderToStringImpl(element, true);
	}

	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 261:
/***/ function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerBatchingStrategy
	 */

	'use strict';

	var ReactServerBatchingStrategy = {
	  isBatchingUpdates: false,
	  batchedUpdates: function (callback) {
	    // Don't do anything here. During the server rendering we don't want to
	    // schedule any updates. We will simply ignore them.
	  }
	};

	module.exports = ReactServerBatchingStrategy;

/***/ }

})