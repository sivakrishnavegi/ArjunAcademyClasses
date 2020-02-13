import React, { Component } from 'react'

class mango extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "hello everyone"
        }
    }
    changeMessage(){
        this.setState ({
            message : "you clicked me"
        })
    }
    render() {
       
        return (
            <div>
                <h1>{this.setState.message}</h1>
                <button onClick={()=> this.changeMessage()}>click me</button>
            </div>
        )
    }
}

export default mango
