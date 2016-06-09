webpackHotUpdate(0,{

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	/* REACT HOT LOADER */if (true) {
	    (function () {
	        var ReactHotAPI = __webpack_require__(5),
	            RootInstanceProvider = __webpack_require__(13),
	            ReactMount = __webpack_require__(15),
	            React = __webpack_require__(79);module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () {
	            return RootInstanceProvider.getRootInstances(ReactMount);
	        }, React);
	    })();
	}try {
	    (function () {

	        'use strict';

	        var React = __webpack_require__(79);
	        var ReactDOM = __webpack_require__(96);

	        var Greet = React.createClass({
	            displayName: 'Greet',

	            render: function render() {
	                return React.createElement('p', { className: 'greet' }, 'Hello Navtech, i\'m jsx!');
	            }
	        });

	        var App = React.createClass({
	            displayName: 'App',

	            getInitialState: function getInitialState() {
	                return {
	                    text: 'Chuck Norris'
	                };
	            },

	            updateText: function updateText(event) {
	                this.setState({
	                    text: event.target.value
	                });
	            },

	            render: function render() {
	                return React.createElement('div', null, React.createElement('h1', null, this.state.text), React.createElement('input', { type: 'text', onChange: this.updateText }));
	            }
	        });

	        ReactDOM.render(React.createElement(Greet, null), document.getElementById('test1'));

	        /* REACT HOT LOADER */
	    }).call(undefined);
	} finally {
	    if (true) {
	        (function () {
	            var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false;if (module.exports && module.makeHot) {
	                var makeExportsHot = __webpack_require__(183);if (makeExportsHot(module, __webpack_require__(79))) {
	                    foundReactClasses = true;
	                }var shouldAcceptModule = true && foundReactClasses;if (shouldAcceptModule) {
	                    module.hot.accept(function (err) {
	                        if (err) {
	                            console.error("Cannot not apply hot update to " + "indextest1.jsx" + ": " + err.message);
	                        }
	                    });
	                }
	            }module.hot.dispose(function (data) {
	                data.makeHot = module.makeHot;data.foundReactClasses = foundReactClasses;
	            });
	        })();
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})