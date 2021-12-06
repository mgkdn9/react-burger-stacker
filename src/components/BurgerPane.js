import React from 'react'
import Ingredient from './Ingredient'

const BurgerPane = props => {
  let burgerBits = props.ingredients.map((i,ii) => {
    return <Ingredient key={ii} ingredient={i} clicky={props.remove}/>
  })
  return (
    <section className='pane'>
      <h3>The Burger</h3>
      {burgerBits}
      <button onClick={props.clear}>Clear</button>
    </section>
  )
}
export default BurgerPane