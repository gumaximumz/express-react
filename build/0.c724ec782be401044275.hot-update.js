webpackHotUpdate(0,{

/***/ 177:
/***/ function(module, exports) {

	'use strict';

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
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h1',
	                null,
	                this.state.text
	            ),
	            React.createElement('input', { type: 'text', onChange: this.updateText })
	        );
	    }
	});

	ReactDOM.render(React.createElement(App, null), document.getElementById('test2'));

/***/ }

})