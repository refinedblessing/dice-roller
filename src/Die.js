import { Component } from 'react'

const dieObj = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six'
}

class Die extends Component {

  render() {
    const { num, isRolling } = this.props
    let dieClass = 'Die';
    dieClass += isRolling ? ' animation-shake' : '' 
    return <div className={dieClass}>
      <i className={`Die-icon fa-solid fa-10x fa-dice-${dieObj[String(num)]}`}></i>
    </div>
  }
}

export default Die
