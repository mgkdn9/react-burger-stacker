import React, {Component} from 'react'

export default class Ingredient extends Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.backgroundColor}}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}