import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  onIncrementMangoes = () => {
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount + 1,
    }))
  }

  onIncrementBananas = () => {
    this.setState(prevState => ({
      bananasCount: prevState.bananasCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="fruit-containers">
        <div className="fruit-bg-container">
          <h1 className="fruit-heading">
            Bob ate <span className="text"> {mangoesCount} </span>mangoes
            <span className="text"> {bananasCount}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit-control-container">
              <img
                className="fruit-img"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onIncrementMangoes}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-control-container">
              <img
                className="fruit-img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              />
              <div className="button-container">
                <button className="button" onClick={this.onIncrementBananas}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
