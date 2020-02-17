import React, { Component } from 'react'

export default class TestS extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 1
    }
 
    }
    handleClick() {
   this.setState((prevstate)=>({
  count : prevstate.count+1
   }))
    } 
 
  render() {
    return (
      <div>
        <p>the count:{this.state.count}</p>
        <button onClick={()=>this.handleClick()} value="click me now" >click me now</button>
      </div>
    )
  }
}
