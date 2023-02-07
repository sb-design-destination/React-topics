import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';


class ClassCompo extends Component {
    render() {
        return (
            <>

                <div className="row text-center">
                    <h5>What is meaning of classs?</h5>
                    <p>Class Wrapping the data in to a single unit .in single unit wrap to multiple data.</p>
                    <div className="col-md-4 offset-md-4">
                        <ol type='1' className="col-md-4 offset-md-4">
                        <li><Link to="Constructor">Construct</Link></li>
                        <li><Link to="stateinclass">State</Link></li>
                        <li><Link to="propsinclass">Props</Link></li>
                        <li><Link to="lifecycleinclass">Lifecycle</Link></li>
                        <li><Link to="JSXinclass">JSX</Link></li>
                        <li><Link to="Conditionalrenderinginclass">Conditional Rendering</Link></li>
                        <li><Link to="Controlledcompoclass"> Controlled Component</Link></li>
                        <li><Link to="Uncontrolledcompoclass"> Uncontrolled Component</Link></li>
                        <li><Link to="RestvsSpreadcompoclass"> Rest Vs Spread op</Link></li>
                        <li><Link to="CompositonVsInheritanceinclass"> Compositon Vs Inheritance </Link></li>
                        <li><Link to="Arrayinclass"> Array </Link></li>
                        <li><Link to="CSSinclass"> CSS</Link></li>
                        <li><Link to="Statelifting">State lifting</Link></li>

                        </ol>
                       
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>

            </>
        );
    }
}

export default ClassCompo;