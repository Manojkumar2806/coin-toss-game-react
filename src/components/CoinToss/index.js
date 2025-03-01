import {Component} from 'react'
import './index.css'

const imagelist = [
  'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  'https://assets.ccbp.in/frontend/react-js/tails-img.png',
]

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, toss: 0}

  onclickchange = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      toss: tossResult,
      heads: tossResult === 0 ? prevState.heads + 1 : prevState.heads,
      tails: tossResult === 1 ? prevState.tails + 1 : prevState.tails,
      total: prevState.total + 1,
    }))
  }

  render() {
    const {total, heads, tails, toss} = this.state
    const image = imagelist[toss]
    return (
      <div className="Container">
        <div className="Card-Container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={image} alt="toss result" />
          <button type="button" onClick={this.onclickchange}>
            Toss Coin
          </button>
          <div className="scoreConaiern">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
