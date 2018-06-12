import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {      
      data: data,
      orderBy: "position",
      order: "Position"
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(e){
    e.preventDefault();
    this.setState({orderBy : e.target.getAttribute('data-value')});
    this.setState({order: e.target.innerText})
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
            <div className="clearfix desktop">
              <div className="logo"></div>
              <Dropdown toggle={ this.toggle } 
                orderBy={ this.state.orderBy }
                order={ this.state.order } />
            </div>
            { items } 
              <div className="clearfix mobile">
              <Dropdown toggle={ this.toggle } 
                orderBy={ this.state.orderBy }
                order={ this.state.order } />
            </div>
          </div>          
        </div>                
      </div>
    )
  }
}

class Dropdown extends React.Component {    
  render() { 
    const { toggle, orderBy, order } = this.props;
    const checked = <span className="check"></span>;
    const input = names; // array from the bottom of this script
    const output = names.map((item)=>{
        return <li><a href="#" onClick={ toggle }  data-value={ item[0]}>{item[1] } { orderBy === item[0] ? checked : null }</a></li>
    });      
          
    return (
      <div className="filter">
      <div className="dropdown">
        <div className="dropdown-heading">
          Order by 
          <span className="dropbtn">
            {this.props.order}<span className="carat"></span>
          </span>
        </div>
        <ul className="dropdown-content">
          { output }
        </ul>
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
      return <div className="employee-position"><small className={ orderBy === item ? "active" : null }></small> {data[item] }</div>
    });
    return (    
      <div className="card" >
        <div className="card-container" style={{ backgroundImage: "linear-gradient(rgba(255, 255,255, 0.45), rgba(255,255,255, 0.45)), url("+`${data.bg}`+")" }}  ></div>
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
const names = [["first", "First Name"],["last", "Last Name"],["position","Position"]]
const categories = ["position"]
const data = [{"id":1,"first":"Yasmine","last":"Ahmed","img":"https://randomuser.me/api/portraits/women/99.jpg","position":"Analyst", "bg": "https://meinsta.github.io/auth0-sample/background/1.jpg"},
{"id":2,"first":"Gerardo","last":"Burmudez","img":"https://randomuser.me/api/portraits/men/2.jpg","position":"Engineer", "bg": "https://meinsta.github.io/auth0-sample/background/2.jpg"},
{"id":3,"first":"Juan","last":"Armstrong","img":"https://randomuser.me/api/portraits/men/49.jpg","position":"Designer", "bg": "https://meinsta.github.io/auth0-sample/background/3.jpg"},
{"id":4,"first":"Nooshin","last":"Mizrahi","img":"https://randomuser.me/api/portraits/women/36.jpg","position":"Producer", "bg": "https://meinsta.github.io/auth0-sample/background/4.jpg"},
{"id":5,"first":"Tamar","last":"Cohen","img":"https://randomuser.me/api/portraits/women/59.jpg","position":"Accountant", "bg": "https://meinsta.github.io/auth0-sample/background/5.jpg"}];

export default App;
