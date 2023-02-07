import React, { Component } from 'react';

class Constructorcompo extends Component {
    constructor(){
        super()
        console.log("Bhavyata");
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h4>What is Constructor?</h4>
                        <p>Constructor is a method which is invoked by defualt when objects are created and in React js we 
                            are never creating object of any classes for then in<mark> Ract js we have to use of constructor is 
                                invoked by defualt when component called.</mark>Constructor never return.</p>
                                <p>When we have to value set then used to constructor nd for method is  a setstate.</p>
                                <h4>Why we used Super?</h4>
                                <p>just bcoz in a componenet used to two class so we have to specify class..and two class is extends= it means inheritance so we can used to component property used in first class in component also constructor so two constructor
                                    when parent property used to chiled then used to super.
                                    <mark>Super means parent constructor is called in chiled constructor.</mark>
                                </p>
                    </div>
                </div>
               
            </>
        );
    }
}

export default Constructorcompo;