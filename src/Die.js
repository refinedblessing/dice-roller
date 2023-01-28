import { Component } from 'react'

const dieSides = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six'
]

class Die extends Component {

  render() {
    const { num, isRolling } = this.props
    return <div className={`Die`}>
      <i className={`Die-icon ${isRolling && 'animation-shake'} fa-solid fa-10x fa-dice-${dieSides[num]}`}></i>
    </div>
  }
}

export default Die
