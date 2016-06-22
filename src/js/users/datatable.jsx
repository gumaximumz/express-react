import React from 'react';
import ReactDOM from 'react-dom';
import RDT from 'RDT';
import '../../../node_modules/react-datatable/dist/css/rdt.css'

class Datatables extends React.Component {
    constructor() {
        super();
        this.data = []
        this.config = {
            style: 'pure',
            cols: [
                { property: "name", editable: true, header: "Name" },
                { property: "position", header: "Position" },
                { property: "office", header: "Office" },
                { property: "age", header: "Age" }
            ]
        }
    }

    render() {
        React.createElement(RDT, {
            config: this.config,
            datasource: { data: this.data }
        })
    }
}

module.exports = Datatables;

