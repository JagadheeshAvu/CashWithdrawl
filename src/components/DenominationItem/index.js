// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, decrementValue} = props

  const onDecrementValue = () => {
    decrementValue(value)
  }
  return (
    <li>
      <button type="button" className="button" onClick={onDecrementValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
