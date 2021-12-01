import React, {Component} from 'react'
import Ingredient from './Ingredient'
import AddBtn from './AddBtn'

export default class IngredientList extends Component {
  state = {
    buffer: 0
  }
  //helper functions
  addToBurger = (e) => {

  }
  
  render() {
    
    const allIngredients = this.props.ingredients.map((ing) => {
      return (
        <div>
          <Ingredient name={ing.name} backgroundColor={ing.color}/>
          <AddBtn onClick={this.addToBurger}/>
        </div>
      )
    })

    return (
      <div>
        {allIngredients}
      </div>
    )
  }
}