// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachItem, clickEmojiButton} = props
  const {emojiUrl, id, emojiName} = eachItem
  const emojiButton = () => {
    clickEmojiButton(id)
  }

  return (
    <li>
      <button type="button" className="emoji-game-img" onClick={emojiButton}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
