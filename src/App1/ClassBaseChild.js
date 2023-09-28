import React, { Component } from 'react'

class ClassBaseChild extends Component{
    render(){
        return(
            <>
            <h1>Data</h1>
            <h2>Name:{this.props.name}</h2>
            <button onClick={this.props.Click}>Click Here</button>
            </>
        )
    }
}
export default ClassBaseChild;