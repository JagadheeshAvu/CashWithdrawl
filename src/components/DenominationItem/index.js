// Write your code here
const DenominationItem = props => {
  const {denominationList, decrementValue} = props
  const {value} = denominationList

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
