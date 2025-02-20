import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  dependingOnColor = () => {
     if (this.props.eyeColor == "blue") {
       return BlueBaby
     }
     if (this.props.eyeColor == "glowing") {
       return GlowingBaby
     }
     if (this.props.eyeColor == "sun") {
       return SunBaby
     }
     else {
       return normalBaby
     }
   }


  render() {
    return (
      <li className="hogbabies">
        <h1>Name: {this.props.pigName}</h1>
        <h3>Weight:</h3>
        <h3>Hobby: {this.props.pigHobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>

        <Button name="+">
          Increase Weight
        </Button>
        <Button name="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.dependingOnColor()} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>

      </li>
    )
  }
}
