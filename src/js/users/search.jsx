import $ from 'jquery';
import React, {Component} from 'react';
import {render} from 'react-dom';


class Search extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
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
    )
  }
}

module.exports = Search;