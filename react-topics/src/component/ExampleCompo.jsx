import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ExampleCompo extends Component {
    render() {
        return (
            <>
                <div className='conteiner mt-4 fs-4'>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <Link to="ExampleCompo">Example Component</Link>
                        </div>

                        <div className="col-md-4">
                            <Link to="ClassComponent">Class Component</Link>
                        </div>

                        <div className="col-md-4">
                            <Link to="FunctionalCompo">Functional Component</Link>
                        </div>
                    </div>
             </div>
                <Outlet></Outlet>
            </>

        );
    }
}

export default ExampleCompo;