import React from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory, Router, Route, Link } from 'react-router'
import TestUpdateText from './updatetexts/updatetext.jsx'
import Users from './users/index.jsx'
import '../css/app.css'

const Menu = ({ children, location: { pathname } }) => {
    // Only take the first-level part of the path as key, instead of the whole path.
    const key = pathname.split('/')[1] || 'root'
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container"><a  className="navbar-brand active">Express HTML</a>
                    <ul className="nav navbar-nav">
                        <li><Link to="/hello">Hello</Link></li>
                        <li><Link to="/updateText">Update Text</Link></li>
                        <li><Link to="/datatable">Datatable</Link></li>
                    </ul>
                </div>
            </nav>
            <div class="form-horizontal">
                <ReactCSSTransitionGroup
                    component="div" transitionName="swap" className="container body-content form-control-static"
                    transitionEnterTimeout={500} transitionLeaveTimeout={500}
                    >

                    {React.cloneElement(children || <div />, { key: key }) }
                </ReactCSSTransitionGroup>
            </div>
        </div>
    )
}


const Hello = ({ children, location: { pathname } }) => {
    const key = pathname.split('/hello')[1] || 'root'
    return (
        <div className="Image">
            <h1>Hello</h1>
            <ul>
                <li><Link to="/hello/tab1">Tab 1</Link></li>
                <li><Link to="/hello/tab2">Tab 2</Link></li>
            </ul>
            <ReactCSSTransitionGroup
                component="div" transitionName="example"
                transitionEnterTimeout={500} transitionLeaveTimeout={500}
                >
                {React.cloneElement(children || <div/>, { key: pathname }) }
            </ReactCSSTransitionGroup>
        </div>
    )
}

const Tab1 = () => (
    <div className="Image">
        <h2>Hello, Navtech</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
)

const Tab2 = () => (
    <div className="Image">
        <h2>Hi, B.Support</h2>
        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
)

const UpdateText = TestUpdateText;
const DataTable = Users;

render((
    <Router history={browserHistory}>
        <Route path="/" component={Menu}>
            <Route path="hello" component={Hello}>
                <Route path="tab1" component={Tab1} />
                <Route path="tab2" component={Tab2} />
            </Route>
            <Route path="updateText" component={UpdateText}>
            </Route>
            <Route path="datatable" component={DataTable}>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'))


if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            return [rootInstance];
        }
    });
}