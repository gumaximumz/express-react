
var test2 = require('./indextest2.jsx');
//ReactDOM.render(<MyScript />, document.getElementById('app'));

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function() {
            return [rootInstance];
        }
    });
}