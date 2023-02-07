import React, { Component } from 'react';

class ConditionalRenderingclasscompo extends Component {
    constructor() {
        super();
        this.state = { isLoggged: true , data:null }
    }
    logedin = () => {
        console.log("called");
        this.setState({ isLoggged: ! this.state.isLoggged})
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        {this.state.isLoggged ? <h3>Loggedin</h3> : <h3>Loggedout</h3>}

                        {this.state.isLoggged.toString()}
                        <button onClick={this.logedin}>Click</button>
                    </div>
                </div>

            </>
        );







        // if (this.state.isLoggged) {
        //     return (
        //         <>
        //         <h3>Loggedin</h3>
        //          {this.state.isLoggged.toString()}
        //            <button onClick={this.logedin}>Click</button> 
        //         </>
        //     );
        // } else {
        //     return (
        //         <>
        //          <h3>Loggedout</h3>
        //          {this.state.isLoggged.toString()}
        //            <button onClick={this.logedin}>Click</button> 
        //         </>
        //     );
        // }

    }
}

export default ConditionalRenderingclasscompo;