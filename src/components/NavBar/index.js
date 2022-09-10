// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, totalScore, stateOfEmoji} = props

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-card-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="navbar-img"
            alt="emoji logo"
          />
          <h1 className="main-heading-navbar">Emoji Game</h1>
        </div>
        <div className="navbar-card-1">
          <p className="navbar-para-1">
            {stateOfEmoji ? '' : `Score: ${score}`}
          </p>
          <p className="navbar-para-1">
            {stateOfEmoji ? '' : `Top Score: ${totalScore}`}
          </p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
