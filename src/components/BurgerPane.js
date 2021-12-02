import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
  render() {
    let burgerBits = this.props.ingredients.map((i,ii) => {
      return <Ingredient key={ii} ingredient={i} clicky={this.props.remove}/>
    })
    return (
      <section className='pane'>
        <h3>The Burger</h3>
        {burgerBits}
        <button onClick={this.props.clear}>Clear</button>
      </section>
    )
  }
}