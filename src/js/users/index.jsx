
import React, {Component} from 'react';
import {render} from 'react-dom';
import DtUser from './dt.jsx'
import SearchUser from './search.jsx'
import { browserHistory, Router, Route, Link } from 'react-router'

class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
       <div>
       <div className="panel panel-default">
            <div className="panel-heading">
                <h4>Search users</h4>
            </div>
            <div className="panel-body">
           <SearchUser />
            </div>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <div class="row">
                <div class="col-md-6 col-xs-6">
                    <h4>Users list</h4>
                </div>
                <div class="col-md-6 col-xs-6 text-right">
                  <Link to="/user/create">Create</Link>
                </div>
            </div>
            </div>
            <div className="panel-body">
           <DtUser />
           </div>
        </div>
      </div>
    )
  }
}

module.exports = Index;