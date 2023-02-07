import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Functionalcompo = () => {
    return (
        <>
            <div className="row text-center">
                <div className="col-md-4 offset-md-8">
                  <ol>
                    <li><Link to="Stateinfunction">state</Link></li>
                    <li><Link to="Apiinfunction">API</Link></li>
                    <li><Link to="UseeffectandUselayoutinfunction">UseEffect and UseLayout</Link></li>
                    <li><Link to="Usecontextinfunctional">Usecontext</Link></li>
                    <li><Link to="Formstatebindinginfunction">Formstatebinding</Link></li>
                    <li><Link to="Usecallbackinfunction">Usecallback</Link></li>
                    <li><Link to="Usememoinfunction">useMemo</Link></li>
                    <li><Link to="Usereducreinfunction">useReducer</Link></li>
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
};

export default Functionalcompo;