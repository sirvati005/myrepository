// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onClickChangeBalance = denominationValue => {
    this.setState(prevState => ({
      balance: prevState.balance - denominationValue,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="app-background">
        <div className="person-acc-background">
          <div className="person-name-container">
            <p className="profile-pic">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-information-container">
            <p className="your-balance-text">Your Balance</p>
            <div>
              <p className="amount">{balance}</p>
              <p className="description">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withdraw-text">Withdraw</p>
            <p className="rupees-text">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <div>
            <ul className="buttons-container">
              {denominationsList.map(denomination => (
                <DenominationItem
                  key={denomination.id}
                  denomination={denomination}
                  onClick={this.onClickChangeBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
