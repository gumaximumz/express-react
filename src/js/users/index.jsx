
import React, {Component} from 'react';
import {render} from 'react-dom';
import DtUser from './dt.jsx'
import SearchUser from './search.jsx'

class index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
       <header>
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
                  <a to="/datatable/create" class="btn btn-success">
                     <button type="button" class="glyphicon glyphicon-plus" ></button>
                </a>
                </div>
            </div>
            </div>
            <div className="panel-body">
           <DtUser />
           </div>
        </div>
      </header>
    )
  }
}

module.exports = index;