import React, {Component} from 'react'
import Ingredient from './Ingredient'
import AddBtn from './AddBtn'

export default class IngredientList extends Component {
  
  render() {
    
    const allIngredients = this.props.ingredients.map((ing,index) => {
      return (
        <div key={index}>
          <Ingredient name={ing.name} backgroundColor={ing.color}/>
          <AddBtn color={ing.color} foodName={ing.name} onClick={this.props.onClick}/>
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