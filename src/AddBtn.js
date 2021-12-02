import React, {Component} from 'react'

export default class AddBtn extends Component {
  render() {
    return <button color={this.props.color} name={this.props.foodName} onClick={this.props.onClick}>></button>
  }
}