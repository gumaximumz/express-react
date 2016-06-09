webpackHotUpdate(0,{

/***/ 3:
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

	        var test1 = __webpack_require__(95);
	        var test2 = __webpack_require__(188);
	        //ReactDOM.render(<MyScript />, document.getElementById('app'));

	        if (true) {
	            __webpack_require__(186).RootInstanceProvider.injectProvider({
	                getRootInstances: function getRootInstances() {
	                    return [rootInstance];
	                }
	            });
	        }

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
	                            console.error("Cannot not apply hot update to " + "app.js" + ": " + err.message);
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