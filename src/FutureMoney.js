import React, {Component} from "react"
import chipotleImg from "./img/chipotle.jpg"
import airpodsImg from "./img/airpods.jpg"
import vacationImg from "./img/vacation.jpg"
import teslaImg from "./img/tesla.jpg"
import collegeImg from "./img/college.jpg"
import nyapartmentImg from "./img/nyapartment.jpg"
import hamiltonImg from "./img/hamilton.jpg"
import roadTrip from "./img/roadTrip.jpg"
import yachtImg from "./img/yacht.jpg"
import moneyImg from "./img/money.png"
import {Link} from "react-router-dom"



class FutureMoney extends Component{
  constructor(props){
    super(props)
    this.state={
      cardNumber: 0,
      cardLength: 0
    }
    this.handleClick= this.handleClick.bind(this)
    this.unfilteredCards = [
        {
          name: "You could chow down a chipotle burrito— with guac!",
          cost: 10,
          img: chipotleImg,
          bgColor: "#67b27e",
          cardColor: "#96d88c"
        },
        {
          name: "You could walk around listening to spotify rocking a pair of airpods",
          cost: 160,
          img: airpodsImg,
          bgColor: "#f4bf42",
          cardColor: "#f9e5b3"
        },
        {
          name: "You can get front row tickets to see Hamilton, the musical",
          cost: 850,
          img: hamiltonImg,
          bgColor: "#e89933",
          cardColor: "#f7d0a0"

        },
        {
          name: "You could take a vacation to Cabo for two weeks and chill by the beach",
          cost: 5000,
          img: vacationImg,
          bgColor: "#76bca0",
          cardColor: "#baf2db"
        },
        {
          name: "You could drive around in a sweet Tesla Model 3 —or have the car drive you",
          cost: 35000,
          img: teslaImg,
          bgColor: "#5a69bc",
          cardColor: "#a0aeff"
        },
        {
          name: "You could take a year-long road trip around the world",
          cost: 24000,
          img: roadTrip,
          bgColor:"#a885e5",
          cardColor: "#dcc7ea"
        },
        {
          name: "You could skip the student loans and afford to go to an in-state college or grad school",
          cost: 120000,
          img: collegeImg,
          bgColor: "#cc84ab",
          cardColor: "#fcd6eb"
        },
        {
          name: "You could live in luxury at a high end New York City Apartment",
          cost: 1000000,
          img: nyapartmentImg,
          bgColor: "#d15e53",
          cardColor: "#d88c88"
        },
        {
          name: "You could sail around in your own private yacht",
          cost: 10000000,
          img: yachtImg,
          bgColor: "#82b5e5",
          cardColor: "#c4dbf2"
        }
        ]
    this.cards = this.unfilteredCards.filter(card => card.cost > this.props.state.cost)
  }

  handleClick(event){
    const {name} = event.target
    if (name === "Next"){
      if (this.state.cardNumber===this.cards.length - 1){
        this.setState({cardNumber: 0})
      }
      else{
        this.setState(prevState => {
          return {
            cardNumber: prevState.cardNumber + 1
          }
        })
      }
    }
    else if (name === "Previous"){
      if (this.state.cardNumber===0){
        this.setState({cardNumber: this.cards.length - 1})
      }
      else{
        this.setState(prevState => {
          return {
            cardNumber: prevState.cardNumber - 1
          }
        })
      }
    }
  }


  render(){
    return (
      <div id="card-container" style={{backgroundColor: this.cards[this.state.cardNumber].bgColor}}>
        <div id="logo">
        <img src={moneyImg} alt=""/>
        <h3>Investing Calculator</h3>
      </div>
        <div id="header">
        <h1>If instead of buying a {this.props.state.materialisticDesire} for ${this.props.state.cost},</h1>
        <h1>you invested ${this.props.state.cost} and waited &nbsp;
          {Math.floor(Math.log(this.cards[this.state.cardNumber].cost/this.props.state.cost)/
            Math.log(1.10))} years </h1>
        </div>
        <button type="button" id="previous" name="Previous" onClick={this.handleClick} style={{backgroundColor: this.cards[this.state.cardNumber].cardColor}}> &#8249; </button>
          <div className="card" style={{backgroundColor: this.cards[this.state.cardNumber].cardColor}}>
            <img src={this.cards[this.state.cardNumber].img} alt=""/>
            <h1 id="text-container">{this.cards[this.state.cardNumber].name}</h1>
          </div>
        <button type="button" id="next" name="Next" onClick={this.handleClick} style={{backgroundColor: this.cards[this.state.cardNumber].cardColor}}> &#8250; </button>
        <a id="investing-link" href="https://www.nerdwallet.com/article/investing/investing-101">Learn more about investing</a>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <button type="button" name="Restart" id="restart" style={{backgroundColor: this.cards[this.state.cardNumber].cardColor}}>Restart </button>
        </Link>
      </div>
    )
  }
}
export default FutureMoney
