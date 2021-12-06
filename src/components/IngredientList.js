// IngredientList will loop over props (ingredients)
// produces an Ingredient component for every ingredient in the array
import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = props => {
  // here we need a list of the ingerdients that we can turn into
  let allIngredients = props.ingredients.map((i,ii) => {
    return <li onClick={props.add}>
      <Ingredient key={ii} ingredient={i} />
    </li>
  })
  return (
    <section className='pane'>
      <h3>Ingredient List</h3>
      <ul className='ingredient-list'>
        {allIngredients}
      </ul>
    </section>
  )
}
export default IngredientList