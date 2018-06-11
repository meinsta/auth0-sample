import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {      
      data: data
    };
  }
  render() {    
    let sorted = this.state.data;
     
    const items = sorted.map((item)=>{
      return <Employee data={ item } key={ item.id } />
    }); 
    
    return (
      <div className="container">
        <div className="row">
          <div className="row-rapper">
            { items } 
          </div>          
        </div>                
      </div>
    )
  }
}

class Employee extends React.Component {
  render(){
    const { data, orderBy } = this.props;
    const input = categories; 
    const output = input.map((item)=>{
      return <div><small className={ orderBy === item ? "active" : null }>{item}:</small> {data[item] }</div>
    });
    return (    
      <div className="card">
        <div className="employee">
          <img className="avatar" src={ data.img } alt={`${data.first} ${data.last}` } /> 
        </div>
        <div className="details">
          <h4>
            <span className={ orderBy === "first" ? "active" : null }>{ data.first } </span> 
            <span className={ orderBy === "last" ? "active" : null }>{ data.last }</span>
          </h4>      
          {output}
        </div>
      </div>     
    )
  }
}
const categories = ["position"]
const data = [{"id":1,"first":"Yasmine","last":"Ahmed","img":"https://randomuser.me/api/portraits/women/99.jpg","position":"Analyst"},
{"id":2,"first":"Gerardo","last":"Burmudez","img":"https://randomuser.me/api/portraits/men/2.jpg","position":"Engineer"},
{"id":3,"first":"Juan","last":"Armstrong","img":"https://randomuser.me/api/portraits/men/49.jpg","position":"Designer"},
{"id":4,"first":"Nooshin","last":"Mizrahi","img":"https://randomuser.me/api/portraits/women/36.jpg","position":"Producer"},
{"id":5,"first":"Tamar","last":"Cohen","img":"https://randomuser.me/api/portraits/women/59.jpg","position":"Accountant"}];

export default App;
