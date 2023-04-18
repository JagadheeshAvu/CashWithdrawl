// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  decrementValue = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <div className="top-section">
            <h1 className="initial-name">S</h1>
            <h2 className="name">Sarah Williams</h2>
          </div>
          <div className="middle-section">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="balance">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="currency-rupees">CHOOSE SUM (IN RUPEES)</p>

          <ul className="unordered-list">
            {denominationsList.map(eachValue => (
              <DenominationItem
                decrementValue={this.decrementValue}
                key={eachValue.id}
                value={eachValue.value}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
