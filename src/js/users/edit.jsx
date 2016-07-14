
import React, {Component} from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'
import FormPartial from './form-partial.jsx'

class Edit extends React.Component {
    constructor(id) {
        super();
        var me = this;
        this.state = {
            id: '',
            name: '',
            username: '',
            position: ''
        }

        this.editUrl = '/edit';
        this.getUrl = '/user';
        $.get(me.getUrl, {id: id}, (data) => {
            me.state = data;
        })

        this.data={
            state: me.state,
            url: me.editUrl
        }
    }


    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>Edit users</h4>
                    </div>
                    <div className="panel-body">
                    <FormPartial item={this.data}/>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Edit;