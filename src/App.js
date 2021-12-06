import './App.css';
import React from 'react'
// import ingredients from './Ingredients';
// import Ingredient from './Ingredient'
import BurgerStacker from './components/BurgerStacker'

const App = () => {
  //DONE BY ME BEFORE CODE ALONG
  // state = {
  //   assembledBurger: []
  // }
  // //helper functions
  // addToBurger = (e) => {
  //   //figure out what to add
  //   // console.log(e.target.color)
  //   //declare new burger item
  //   const newItem = {
  //     name: e.target.name,
  //     color: e.target.color
  //   }
  //   //declare buffer array
  //   const burgerBuffer = this.state.assembledBurger
  //   //push item onto burger array
  //   burgerBuffer.push(newItem)
  //   //set state of assembled burger
  //   this.setState({
  //     assembledBurger: burgerBuffer
  //   })
  // }
  return (
    <div className="App">
      <BurgerStacker />
    </div>
    // <div className="App">
    //   <h1>Burger Stacker</h1>
    //   <IngredientList
    //     ingredients={ingredients}
    //     onClick={this.addToBurger}
    //   />
    //   <BurgerPane
    //     ingredients={this.state.assembledBurger}
    //   />
    // </div>
  )
}
export default App