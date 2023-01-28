import { Component } from 'react';
import Die from './Die';

function getRandomDieNum() {
  return Math.floor(Math.random() * 6) + 1;
}

class RollDice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRolling: false,
      num1: getRandomDieNum(),
      num2: getRandomDieNum(),
    };

    this.handleRollDice = this.handleRollDice.bind(this)
  }

  handleRollDice() {
    // use settimeout and isRolling here
    this.setState({isRolling: true})
    setTimeout(() => {
      this.setState({
        num1: getRandomDieNum(),
        num2: getRandomDieNum(),
        isRolling: false
      })
    }, 600)
  }

  render() {
    const { isRolling, num1, num2 } = this.state;
    return (
      <div className="RollDice">
        <div className='RollDice-dice'>
          <Die isRolling={isRolling} num={num1} />
          <Die isRolling={isRolling} num={num2} />
        </div>
        <button disabled={isRolling} onClick={this.handleRollDice} className="RollDice-btn">
          {isRolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
