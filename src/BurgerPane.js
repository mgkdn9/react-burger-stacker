import React, {Component} from 'react'

export default class BurgerPane extends Component {
  render() {
    const burgerItems = this.props.ingredients.map((ing,index) => {
      return <li key={index}>{ing.name}</li>
    })
    return <ul>{burgerItems}</ul>
  }
}