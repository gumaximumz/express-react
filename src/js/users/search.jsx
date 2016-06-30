
import React, {Component} from 'react';
import {render} from 'react-dom';


class Search extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label col-md-4">Name</label>
                            <div className="col-md-8">
                                <input className="form-control text-box single-line" id="Name" name="Name"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="control-label col-md-4">Username</label>
                            <div className="col-md-8">
                                <input className="form-control text-box single-line" id="Username" name="Username"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xs-6 text-right">
                        <button type="button" id="btn_search" class="btn btn-success">Search</button>
                    </div>
                    <div className="col-md-6 col-xs-6">
                        <button type="button" class="btn btn-link">Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Search;