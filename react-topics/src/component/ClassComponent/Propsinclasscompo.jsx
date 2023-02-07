import { hover } from '@testing-library/user-event/dist/hover.js';
import React, { Component } from 'react';
import CardCompo from "./CardCompo.jsx";

class Propsinclasscompo extends Component {
    render() {
        return (
            <>
                
                <div className="container">
                <h4>What is Meaning of Props?</h4>
                <p>It is mean to one componenet data is called to other component.</p>
                <div className="row">
                    <div className="col-md-3">
                        <CardCompo title="Data" Imgdata='https://mdbootstrap.com/img/new/standard/nature/184.webp'/>
                    </div>
                    
                    <div className="col-md-3">
                        <CardCompo title="Kai pn"/>
                    </div>
                    <div className="col-md-3">
                        <CardCompo title="kuch bhiii"/>
                    </div>
                    <div className="col-md-3">
                        <CardCompo title="Easy"/>
                    </div>

                </div>
                </div>
               
                
            </>
        );
    }
}

export default Propsinclasscompo;
