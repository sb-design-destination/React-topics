import React, { Component } from 'react';

class Uncontrolledinclasscompo extends Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    Handlesubmit=(event)=>{
        event.preventDefault();
        console.log(this.input);
        console.log(this.input.current.value);
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <p> In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.</p>

                            <p> To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.</p>

                            <h4>What is Uncontrolled component?</h4>
                            <p>Uncontrolled component: In an uncontrolled component, the value of the input element is handled by the DOM itself. Input elements inside uncontrolled components work just like normal HTML input form elements.
                                The state of the input element is handled by the DOM. Whenever the value of the input element is changed, event-based callbacks are not called. Basically, react does not perform any action when there are changes made to the input element.

                            <mark>   Whenever use enters data inside the input field, the updated data is shown directly. To access the value of the input element, we can use ref.</mark> </p>
                            <p> For example, this code accepts a single name in an uncontrolled component:</p>
                            <form onSubmit={this.Handlesubmit}>
                                <label>
                                    Name:
                                    <input type="text" ref={this.input} />
                                </label>
                                <input type="submit" value="Submit" />
                                {JSON.stringify(this.input)}
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Uncontrolledinclasscompo;