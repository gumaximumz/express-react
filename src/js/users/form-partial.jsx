
import React, {Component} from 'react';
import {render} from 'react-dom';


class FormPartial extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    getInitialState() {
        return { value: 'Hello!' };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log( this.setState);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <label className="control-label col-md-4">Name</label>
                        <div class="col-md-8">
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                                />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="control-label col-md-4">Username</label>
                        <div class="col-md-8">
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                                />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="control-label col-md-4">Position</label>
                        <div class="col-md-8">
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = FormPartial;