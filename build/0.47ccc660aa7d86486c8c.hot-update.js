webpackHotUpdate(0,{

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(252);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(253);

	__webpack_require__(254);

	__webpack_require__(255);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import 'datatables.net-fixedheader';
	//import 'datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.css';

	var DataUrl = 'http://localhost:7777/users';

	var elem = document.createElement('div');
	document.body.appendChild(elem);

	_jquery2.default.extend(true, _jquery2.default.fn.dataTable.defaults, {
	  language: {
	    url: DataUrl
	  }
	});

	var App = function App() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'strong',
	      null,
	      'JSON'
	    ),
	    _react2.default.createElement('table', { className: 'table table-striped', ref: function ref(elem) {
	        return (0, _jquery2.default)(elem).DataTable({
	          data: [{
	            name: '1',
	            foo: {
	              bar: 1
	            }
	          }, {
	            name: '2',
	            foo: {
	              bar: 2
	            }
	          }],
	          columns: [{
	            data: 'name',
	            title: 'Name'
	          }, {
	            data: 'foo.bar',
	            title: 'foo.bar'
	          }, {
	            data: 'foo',
	            title: 'foo',
	            render: function render(foo) {
	              return '<em>' + foo.bar + '</em>';
	            }
	          }]
	        });
	      } }),
	    _react2.default.createElement(
	      'strong',
	      null,
	      'Fixed Header'
	    ),
	    _react2.default.createElement(
	      'table',
	      { className: 'table', ref: function ref(elem) {
	          return (0, _jquery2.default)(elem).DataTable({
	            fixedHeader: true
	          });
	        } },
	      _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            'It will be fixed'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tbody',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '2'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '2'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '2'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '2'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '2'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '2'
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'strong',
	      null,
	      'Feature'
	    ),
	    _react2.default.createElement(
	      'table',
	      { className: 'table', ref: function ref(elem) {
	          return (0, _jquery2.default)(elem).dataTable();
	        } },
	      _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            'value'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tbody',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '1'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '2'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '3'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '4'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '5'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '6'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '7'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '8'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '9'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '10'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '11'
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'table',
	      { ref: function ref(elem) {
	          return (0, _jquery2.default)(elem).DataTable();
	        }, className: 'table table-striped' },
	      _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            'name'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tbody',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            'hello'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            'world'
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'table',
	      { ref: function ref(elem) {
	          return (0, _jquery2.default)(elem).DataTable();
	        }, 'data-paging': false },
	      _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            'value'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tbody',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '2'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '1'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '1'
	          )
	        )
	      )
	    )
	  );
	};

	(0, _reactDom.render)(_react2.default.createElement(App, null), elem);

/***/ }

})