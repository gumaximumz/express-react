
import React, {Component} from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'
import FormPartial from './form-partial.jsx'

class Create extends React.Component {
    constructor() {
        super();
        var me = this;
        this.state = {
            id: '',
            name: '',
            username: '',
            position: ''
        }
        this.createUrl = '/edit';
        this.data={
            state: me.state,
            url: me.createUrl
        }
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>Create users</h4>
                    </div>
                    <div className="panel-body">
                    <FormPartial item={this.data}/>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Create;