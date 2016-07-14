import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs/js/dataTables.bootstrap';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
import React, {Component} from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'


class Datatables extends React.Component {
  constructor() {
    super();
    this.getUrl = '/userserver';
  }

  editFormat(id) {
        return '<Link to="/user/create">Create</Link>'
    }

  render() {
    let elem = document.createElement('div');
    document.body.appendChild(elem);
    let me = this;
    return (
      <div>
        <table className="table table-striped" ref={elem =>
          $(elem).DataTable({
            processing: true,
            serverSide: true,
            ajax: me.getUrl,
            columns: [
              {
                data: 'id',
                title: 'Id'
              },
              {
                data: 'username',
                title: 'Username'
              },
              {
                data: 'name',
                title: 'Name'
              },
              {
                data: 'position',
                title: 'Position'
              },
              {
                data: 'Id',
                render:  (data, type, row) => {
                  console.log('Id:'+row.id);
                  return me.editFormat(row.id);
                },
                orderable: false,
              },
            ]
          }) }>

        </table>
      </div>
    )
  }
}

module.exports = Datatables;