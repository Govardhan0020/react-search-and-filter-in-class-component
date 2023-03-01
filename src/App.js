import React, { Component } from 'react';
import Table from "./Table" 
import SearchBox from "./SearchBox"
import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Users: [],
      searchstring:"",
    };
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) =>
        this.setState(
          () => {
            return { Users: data };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

OnSearch=(event) =>  {
  const searchstring = event.target.value;

this.setState(
  () => { return { searchstring }},
  () => { console.log(this.state,"42")}
 )
 }

  render() {
 
    const { Users,searchstring} = this.state;
    const OnSearch = this;

    const filterdata = this.state.Users.filter(item => { 
      return( item.category.includes(this.state.searchstring))
    });

    return (
      <div>
        
        <h4> searching Data in class component </h4>
     
       <SearchBox Search={this.OnSearch} />

        <Table filterData={filterdata}  />
      </div>
    );
  }
}
