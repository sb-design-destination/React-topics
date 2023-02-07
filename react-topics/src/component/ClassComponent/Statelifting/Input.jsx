import React, { Component } from 'react';

class Input extends Component {
    handleChange=(e)=>{
        console.log("Input change",e.target.value);
        this.props.ontempchange(e.target.value);
    }
    render() {
        return (
            <>
               <input onChange={this.handleChange} /> 
            </>
        );
    }
}

export default Input;