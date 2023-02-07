import React, { Component } from 'react';

class Stateinclasscompo extends Component {
    Somedata = "called"
    constructor(){
        super();
        console.log("called Constructor");
        this.state ={data :"Something"}
        this.click=this.click.bind(this)
    }
click(){
    console.log("click me");
    console.log(this.Somedata);
    // this.Somedata ="test"; 

}
clickHandlechaneFunction=()=>{
    console.log("click me");
    console.log(this.Somedata);
    this.Somedata ="test"; 
    this.setState({
        data:"new data"
    })

}
    render() {
        console.log("When called then state in update ND CONSTRCTOR IS A ONE TIME CALLED DEFUALT.");
        // let Somedata = "What is State";
       
        const Data = "Why We can't used function()" ;

        return (
            <>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        {this.Somedata}<br/>= data memeber
                        {Data}<br/>
                        <button onClick={this.click}>Click</button>
                        {/* <button onClick={this.click()}>Click</button> = Never called a function with () bcoz it willcalled function directly. */}
                        <h5>Why we can't used ()??</h5>
                        <p>Inside class if we are going to buid a function we dsnt required to specify it with function keyword bcoz of class is a collection 
                            of data Member and member functions only.
                        </p>
                        <h3>What is State?</h3>
                        <p>State means to we can change data in componenet when we used to button click it means componenet refresh and impact on compononet and changes to data.also used to setstate.</p>
                        <p><mark>State mean to one function data send to other function virtual DOM live example. </mark> State used then component is re-initiate when changes </p>
                        <h5>What is Meaning of Bind</h5>
                        <p></p>
                        <h5>Why we used Bind replace arrow Function?</h5>
                        <p>arow function used bcoz we used to without bind </p>
                        <button onClick={this.clickHandlechaneFunction}>Click me without bind with arrow</button>
                        <br />
                        {this.state.data}
                    </div>
                </div>


            </>
        );
    }
}

export default Stateinclasscompo;