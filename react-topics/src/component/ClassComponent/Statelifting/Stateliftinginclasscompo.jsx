import React, { Component } from 'react';
import Input from "./Input.jsx"

class Stateliftinginclasscompo extends Component {
    tempChange=(data)=>{
        console.log("Statelifting change",data);
    }
    render() {
        return (
            <>
            <Input 
            temperature="25"
            ontempchange={this.tempChange}/>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h4>What is StateLifting??</h4>
                        <p>State Lifting means we can used to props helps to data send in child component but here in state lifting we can used to child data in paraent.<br/>
                        child data we can access and used in paraent component that is called state lifting. </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Stateliftinginclasscompo;