import React from "react";

export default class App extends React.Component{
  state = {
    num: 0
  }
  render(){
    const {num} = this.state;
    return (
      <div onClick={()=>{
        debugger
        this.setState({num: num+1})
      }}>
        {num}
      </div>
    )
  }
}