// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrease = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decrease = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="para">Min limit is 0mph, Max limit is 200mph </p>
        <div>
          <button
            type="button"
            onClick={this.onIncrease}
            className="speed-increase"
          >
            Accelerate
          </button>
          <button
            type="button"
            onClick={this.decrease}
            className="speed-decrease"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
