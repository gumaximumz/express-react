
import React, {Component} from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'
import FormPartial from './form-partial.jsx'

class index extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>Create users</h4>
                    </div>
                    <div className="panel-body">
                    <FormPartial />
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = index;