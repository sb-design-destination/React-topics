import React, { Component } from 'react';

class Controlledinclasscompo extends Component {
constructor(props){
    super(props);
    this.state = { value: '' };
    
}
    Handlechange=(event)=>{
console.log(event);
console.log(event.target);
console.log(event.target.value);
// this.setState({value:"static"})
this.setState({value:event.target.value})

    }
    render() {

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <p>
                                In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
                            </p>
                            <p>
                                We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a <q>controlled component</q>.
                            </p>

                            <p>
                                For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
                            </p>
                            <h1>what is controlled component??</h1>
                            <p>Controoled component is a controoled for a input element of a react. </p>
                            <p>Controlled component: In a controlled component, <mark>the value of the input element is controlled by React. <br/>We store the state of the input element inside the code, 
                                and by using event-based callbacks, <br/>any changes made to the input element will be reflected in the code as well.</mark><br/>
                                When a user enters data inside the input element of a controlled component, <br/>onChange function gets triggered and inside the code, <br/>
                                we check whether the value entered is valid or invalid. <br/>If the value is valid, we change the state and <br/>re-render the input element with the new value.</p>
                          <br/>
                          <form action="">
                          <label>
                                    Name:
                                    <input type="text" value={this.state.value} onChange={this.Handlechange} />{this.state.value}
                                </label>
                                <input type="submit" value="Submit" />
                           
                          </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Controlledinclasscompo;