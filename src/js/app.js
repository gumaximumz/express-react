var test1 = require('./indextest1.jsx');
//ReactDOM.render(<MyScript />, document.getElementById('app'));

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function() {
            return [rootInstance];
        }
    });
}