import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const BurgerStacker = () => {
  // state --> holds ingredients
  const [ingredients, setIngredients] = useState([
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'},
      {name: 'Cheese', color: 'gold'}
    ])
  const [burgerIngredients, setBurgerIngredients] = useState([])
  
  // add to stack function (maybe passed to child?)
  const addToStack = (e) => {
    let ingColor =  e.target.style.backgroundColor
    let ingName = e.target.innerText
    setBurgerIngredients([{name: ingName, color: ingColor}, ...burgerIngredients])
  }
  // clear burger stack function (maybe passed to child?)
  const clearBurger = () => {
    setBurgerIngredients([])
  }
  // remove from stack
  const removeFromStack = (e) => {
    console.log('old stack: ', burgerIngredients)
    let newBurgerIngredientArray = burgerIngredients.filter(ingredients => ingredients.name !== e.target.innerText)
    console.log('new stack: ',newBurgerIngredientArray)
    setBurgerIngredients(newBurgerIngredientArray)
  }
    // Not gonna work anymore since not a class Component
    // console.log('a react Component: ', Component)
  return (
    <main>
      <h1>Burger Stacker</h1>
      <div className="panes">
        <IngredientList
          ingredients={ingredients}
          add={addToStack}
        />
        <BurgerPane
          ingredients={burgerIngredients}
          clear={clearBurger}
          remove={removeFromStack}
        />
      </div>
    </main>
  )
}
export default BurgerStacker