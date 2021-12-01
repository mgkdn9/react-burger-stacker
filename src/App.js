import './App.css';
import React, {Component} from 'react'
import ingredients from './Ingredients';
// import Ingredient from './Ingredient'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <IngredientList ingredients={ingredients}/>
        <BurgerPane />
      </div>
    )
  }
}