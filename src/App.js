import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {      
      data: data,
      orderBy: "first",
      order: "asc"
    };
    this.updateOrderBy = this.updateOrderBy.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle(e){
    e.preventDefault();
    let isActive = this.state.dropdownActive;
    isActive = !isActive;
    this.setState({dropdownActive: isActive});
  }
  updateOrderBy(e){
    e.preventDefault();
    const newOrderBy = e.target.getAttribute('data-value');
    this.setState({orderBy : newOrderBy});
  }
  updateOrder(e){
    e.preventDefault();
    const newOrder = e.target.getAttribute('data-value');
    this.setState({order : newOrder});
  }
  render() {    
    const orderBy = this.state.orderBy;
    const order = this.state.order;
    let sorted = this.state.data;
    
    sorted = _.orderBy(sorted, (item) => {
      return item[orderBy]
    }, order); 
     
    const items = sorted.map((item)=>{
      return <Employee data={ item } key={ item.id } />
    }); 
    
    return (
      <div className="container">
        <div className="row">
          <div className="row-wrapper col-sm-8 col-sm-offset-2">
            <div className="clearfix">
              <Dropdown toggle={ this.toggle } 
                dropdownActive={ this.state.dropdownActive } 
                updateOrderBy={ this.updateOrderBy }
                updateOrder={ this.updateOrder }
                orderBy={ this.state.orderBy }
                order={ this.state.order } />
            </div>
            { items } 
          </div>          
        </div>                
      </div>
    )
  }
}

class Dropdown extends React.Component {    
  render() { 
    const { dropdownActive, toggle, orderBy, order, updateOrderBy, updateOrder } = this.props;
    const checked = <span className="check"></span>;
    const input = names; // array from the bottom of this script
    const output = names.map((item)=>{
        return <li><a href="#" onClick={ updateOrderBy }  data-value={ item[0]}>{item[1] } { orderBy === item[0] ? checked : null }</a></li>
    });      
          
    return (
      <div className="dropdown">
        <a className="dropbtn" onClick={ toggle } href="#">
          Sort items by
        </a>
        <ul className="dropdown-content">
          { output }
        </ul>
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
const names = [["last", "last name"],["position","position"]]
const categories = ["position"]
const data = [{"id":1,"first":"Yasmine","last":"Ahmed","img":"https://randomuser.me/api/portraits/women/99.jpg","position":"Analyst"},
{"id":2,"first":"Gerardo","last":"Burmudez","img":"https://randomuser.me/api/portraits/men/2.jpg","position":"Engineer"},
{"id":3,"first":"Juan","last":"Armstrong","img":"https://randomuser.me/api/portraits/men/49.jpg","position":"Designer"},
{"id":4,"first":"Nooshin","last":"Mizrahi","img":"https://randomuser.me/api/portraits/women/36.jpg","position":"Producer"},
{"id":5,"first":"Tamar","last":"Cohen","img":"https://randomuser.me/api/portraits/women/59.jpg","position":"Accountant"}];

export default App;
