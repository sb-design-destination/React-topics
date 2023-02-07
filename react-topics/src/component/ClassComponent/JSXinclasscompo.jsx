import React, { Component } from 'react';

class JSXinclasscompo extends Component {
    render() {
        const name = "Bhavyata"
        const element = <h2>Hello {name}</h2>
        return (
            <>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h5>JSX Meaning??</h5>
                        <p>It is woeking to bebel library .bebel is a interpreter also compiler called and bebel through handel all this.</p>
                        {element}
                        2+2 ={2+2} = In curley breakets content is a JSX working data performing a javascript.
                    </div>
                </div>

            </>
        );
    }
}

export default JSXinclasscompo;