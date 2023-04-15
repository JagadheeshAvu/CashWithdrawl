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
    const {denominationList} = this.props
    const {balance} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <div className="top-section">
            <h1 className="initial-name">S</h1>
            <h2 className="name">Sarah Williams</h2>
          </div>
          <div className="middle-section">
            <h1 className="balance-heading">Your Balance</h1>
            <div>
              <p className="balance">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <h1 className="withdraw">Withdraw</h1>
          <h1 className="currency-rupees">CHOOSE SUM IN (RUPEES)</h1>
        </div>
        <ul>
          {denominationList.map(eachValue => (
            <DenominationItem
              decrementValue={this.eachValue}
              key={eachValue.id}
              value={eachValue.value}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
