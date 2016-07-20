import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs/js/dataTables.bootstrap';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
import React, {Component} from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'
import {renderToStaticMarkup,markup}from 'react-dom/server';
import Toggle from 'react-toggle';

class Editer extends React.Component {
  constructor(item) {
    super();
    this.id = item.id
  }
   render() {
     console.log(this.id)
     return(
       <div>
          <Link to="/user/create">Create</Link>
       </div>
     )
   }
}

class Datatables extends React.Component {
  constructor() {
    super();
    this.getUrl = '/userserver';
  }

  render() {
    let elem = document.createElement('div');
    document.body.appendChild(elem);
    let me = this;
    const option = {
            processing: true,
            serverSide: true,
            ajax: me.getUrl,
            columns: [
              {
                data: 'id',
              },
              {
                data: 'username',
              },
              {
                data: 'name',
              },
              {
                data: 'position',
              },
              {
                data: 'id',
                render: elem=>renderToStaticMarkup(<Link to="/user/create">Create</Link>)
              }
            ]
          }
          console.log(option);
    const datatables = () => {
      return (
        <table className="table table-striped" ref={elem =>
          $(elem).DataTable(option)
        }>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Name</th>
              <th>Position</th>
              <th>Edit</th>
            </tr>
          </thead>
        </table>
      )
    }
    var dt = new datatables();
    return (<div>
      {dt}
    </div>);
  }
}



module.exports = Datatables;