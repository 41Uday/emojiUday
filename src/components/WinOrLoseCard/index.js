// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, clickWonOrLoseButt, won} = props
  const wonOrLoseButton = () => {
    clickWonOrLoseButt()
  }

  const img = won
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const head = won ? 'You Won' : 'You Lose'

  return (
    <div className="win-or-lose-container">
      <div className="card-1-win-lose">
        <h1 className="wor-l-head-1">{head}</h1>
        <p className="w-or-l-score-s">{won ? 'Best Score' : 'Score'}</p>
        <p className="score-style-w-or-l">{won ? '12/12' : `${score}/12`}</p>
        <button
          type="button"
          className="button-w-or-l"
          onClick={wonOrLoseButton}
        >
          Play Again
        </button>
      </div>
      <img src={img} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLoseCard
