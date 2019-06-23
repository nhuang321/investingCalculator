import React, {Component} from "react"
import {withRouter} from "react-router-dom"
import moneyImg from "./img/money.png"

class Form extends Component{

  submitForm(e){
    if (this.props.state.materialisticDesire === ""){
      alert("Please enter the item you desire")
    }
    else if(this.props.state.cost===""){
      alert("Please enter in the cost of " +this.props.state.materialisticDesire)
    }
    else{
      e.preventDefault()
      this.props.history.push("/future-money")
    }
  }

  render(){
    return (
      <div className="content-container">
      <div id="logo">
        <img src={moneyImg} alt=""/>
        <h3>Investing Calculator</h3>
      </div>
        <img src={moneyImg} alt=""/>
        <h1>What do you want to waste money on today?</h1>
        <form onSubmit= {this.submitForm.bind(this)}>
          <input 
              name="materialisticDesire"
              id="desiredItem"
              value={this.props.state.materialisticDesire}
              onChange= {this.props.handleChange}
              placeholder="Enter your materialistic desire here"
            />
          <h2>How much does it cost? &nbsp;$</h2>
          <input 
              name="cost"
              id="price"
              value={this.props.state.cost}
              onChange= {this.props.handleChange}
            />
          <button type="submit">Calculate Future Wealth</button>
        </form>
      </div>
      )
  }
}

export default withRouter(Form)