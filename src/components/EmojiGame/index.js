/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    randomEmoji: false,
    score: 0,
    topScore: 0,
    stop: false,
    emojiArray: [],
    won: false,
  }

  clickEmojiButton = id => {
    this.setState({randomEmoji: true})
    const {emojiArray} = this.state
    const {emojisList} = this.props
    console.log(emojiArray.length)
    if (emojiArray.length === emojisList.length - 1) {
      this.setState({stop: true})
      this.setState({won: true})
    } else if (emojiArray.includes(id)) {
      this.setState({stop: true})
    } else {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState(prevState => ({emojiArray: [...prevState.emojiArray, id]}))
    }
  }

  listOfEmojis = () => {
    const {randomEmoji} = this.state
    const {emojisList} = this.props
    if (randomEmoji === true) {
      return emojisList.sort(() => Math.random() - 0.5)
    }
    return emojisList
  }

  clickWonOrLoseButt = () => {
    this.setState({stop: false})
    const {score, topScore} = this.state
    if (score === 12) {
      this.setState({won: true})
      this.setState({emojiArray: []})
      this.setState({score: 0})
      this.setState({topScore: 12})
    }

    if (score > topScore) {
      this.setState({topScore: score})
      this.setState({score: 0})
    }
    this.setState({score: 0})
  }

  render() {
    const {score, topScore, stop, won} = this.state
    const finalShuffledEmoji = this.listOfEmojis()
    if (stop === false) {
      return (
        <div className="bg-container">
          <NavBar score={score} totalScore={topScore} stateOfEmoji={stop} />
          <ul className="emoji-list-container">
            {finalShuffledEmoji.map(e => (
              <EmojiCard
                eachItem={e}
                key={e.id}
                clickEmojiButton={this.clickEmojiButton}
              />
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <NavBar stateOfEmoji={stop} />

        <WinOrLoseCard
          score={score}
          won={won}
          clickWonOrLoseButt={this.clickWonOrLoseButt}
        />
      </div>
    )
  }
}

export default EmojiGame
