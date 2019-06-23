import React, {Component} from 'react';
import './App.css';
import './index.css'
import Form from './Form'
import FutureMoney from "./FutureMoney"
import {BrowserRouter as Router, Route} from "react-router-dom"
import moneyImg from "./img/money.png"

class App extends Component {
  constructor(){
    super()
    this.state= {
      materialisticDesire: "",
      cost: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render(){

    return (
      <div>
      <Router>
        <div>
          <Route path="/" exact render={(props)=><Form {...props} state= {this.state} handleChange= {this.handleChange}/>} />
          <Route path="/future-money" exact render={(props)=><FutureMoney {...props} state={this.state}/>}/>
        </div>
      </Router>
      </div>
    );
  }
  
}

export default App;
