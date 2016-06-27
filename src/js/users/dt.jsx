import $ from 'jquery';
import 'datatables.net';

import 'datatables.net-bs/js/dataTables.bootstrap';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
//import zh_cn from '../lib/zh_cn.json';
//import 'datatables.net-fixedheader';
//import 'datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.css';
import React, {Component} from 'react';
import {render} from 'react-dom';

$.extend(true, $.fn.dataTable.defaults, {
  //language: {
  //url: require('../lib/zh_cn.json')
  //}
});


class Datatables extends React.Component {
  constructor() {
    super();
    this.getUrl = 'http://localhost:7777/userserver';
  }

  render() {
    let elem = document.createElement('div');
    document.body.appendChild(elem);
    let me = this;
    return (
      <div>
        <strong>User</strong>
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
              }]
          }) }>

        </table>
      </div>
    )
  }
}

module.exports = Datatables;