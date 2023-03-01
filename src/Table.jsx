import React, { Component } from 'react';

export default class Tabel extends Component {
  constructor() {
    super();
    this.state = {
      Border: { border: '2px solid black' },
    };
  }
  render() {
    return (
      <div>
        <div>
          {
            <table>
              <thead>
                <td style={this.state.Border}> S.No</td>
                <td style={this.state.Border}> Title </td>
                <td style={this.state.Border}> Description</td>
                <td style={this.state.Border}> Category </td>
                <td style={this.state.Border}> Price </td>
                <td style={this.state.Border}> count </td>
                <td style={this.state.Border}> Rating </td>
              </thead>
              <tbody>
                {this.props.filterData.map((item) => (
                  <tr>
                    <td style={this.state.Border}>{item.id} </td>
                    <td style={this.state.Border}>{item.title} </td>
                    <td style={this.state.Border}>{item.description} </td>
                    <td style={this.state.Border}>{item.category} </td>
                    <td style={this.state.Border}>$. {item.price} </td>
                    <td style={this.state.Border}>{item.rating.count} </td>
                    <td style={this.state.Border}>{item.rating.rate} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
      </div>
    );
  }
}
