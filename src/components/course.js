import React, { Component } from 'react'

class course extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "himanshu lodu"
        }
    }
    
    render() {

        return (
            <div>hi helo
                <h1>hello :{this.setStat.message}</h1>
            </div>
        )
    }
}
export default course