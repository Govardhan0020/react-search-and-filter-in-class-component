import React, { Component } from 'react';

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <div>
          <label> Search : </label>
          <input
            type="search"
            placeholder="search for prodict"
            onChange={this.props.Search}
          />
        </div>
      </div>
    );
  }
}
