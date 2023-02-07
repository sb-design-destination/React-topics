import React, { Component } from 'react';
import Dialogcompo from "./Dialogcompo.jsx";
// import CompositonVsInheritanceinclasscompo,{FunctionCompo} from "./Myfile.jsx";

class CompositonVsInheritanceinclasscompo extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p> React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.</p>

                            <p> In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.</p>
                        </div>
                    </div>
                </div>
                <Dialogcompo title="in class compo" message="pass"> used children props and compo wrap in to data get</Dialogcompo>
                <FunctionCompo title="functionalcompo" message="pass"> props children</FunctionCompo>
            </>
        );
    }
}
 export function FunctionCompo(props){
    console.log(props);
    return<div style={{border:"1px solid"}}>
        {props.title}
        <p>

        {props.children}
        </p>
    </div>
    

}


export default CompositonVsInheritanceinclasscompo;