
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { browserHistory, Router, Route, Link } from 'react-router'

class FormPartial extends React.Component {
    constructor(data) {
        super();
        console.log('data: ' + data.item);
        console.log('state:' + data.item.state);
        console.log('url:' + data.item.url);
        this.state = data.item.state
        this.createUrl = data.item.url;
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }
    handlePositionChange(e) {
        this.setState({
            position: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        $.post(this.createUrl, this.state)
            .done(function (data) {
                alert('Submit OK');
                this.state = {
                    id: '',
                    name: '',
                    username: '',
                    position: ''
                }
            })
            .fail(function () {
                alert("error");
            });
    }

    render() {
        return (
            <div>
                <form className="commentForm" onSubmit={this.handleSubmit.bind(this) }>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="control-label col-md-4">Name</label>
                            <div class="col-md-8">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    value={this.state.name}
                                    onChange={this.handleNameChange.bind(this) }
                                    />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="control-label col-md-4">Username</label>
                            <div class="col-md-8">
                                <input
                                    type="text"
                                    placeholder="Your username"
                                    value={this.state.username}
                                    onChange={this.handleUsernameChange.bind(this) }
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label className="control-label col-md-4">Position</label>
                            <div class="col-md-8">
                                <input
                                    type="text"
                                    placeholder="Your position"
                                    value={this.state.position}
                                    onChange={this.handlePositionChange.bind(this) }
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-right">
                            <input type="submit" value="Post" />
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

module.exports = FormPartial;