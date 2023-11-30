import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangosCount: 0, bananasCount: 0}

  mangoIncrementCount = () => {
    this.setState(prevState => ({mangosCount: prevState.mangosCount + 1}))
  }
  bananaIncrementCount = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount - 1}))
  }

  render() {
    const {mangosCount, bananasCount} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="countText">{mangosCount}</span> mangoes
            <span className="countText">{bananasCount}</span> bananas
          </h1>
          <div className="items-container">
            <div className="mangoContainer">
              <img
                className="mangoImg"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="mangoButton"
                onClick={this.mangoIncrementCount}
              >
                Eat Mango
              </button>
            </div>

            <div className="mangoContainer">
              <img
                className="mangoImg"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                className="mangoButton"
                onClick={this.bananaIncrementCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
