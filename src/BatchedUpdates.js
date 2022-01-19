import React, { Component } from 'react'

export default class BatchedUpdates extends Component {
  state = {
    num: 0,
  }
  onClick = () => {
    setTimeout(() => {
      this.setState({
        num: this.state.num + 1
      })
      this.setState({
        num: this.state.num + 1
      })
    })
  }
  render() {
    console.log('render~~')
    return (
      <p onClick={this.onClick}>{this.state.num}</p>
    )
  }
}
