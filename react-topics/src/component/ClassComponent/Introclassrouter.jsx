 import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Classcompo from "../ClassComponent/Classcompo.jsx";
import Constructorcompo from "./Constructorcompo.jsx"
import Stateinclasscompo from "./Stateinclasscompo.jsx"
import Propsinclasscompo from "./Propsinclasscompo.jsx"
import Lifecycleinclasscompo from "./Lifecycleinclasscompo.jsx"
import JSXinclasscompo from "./JSXinclasscompo.jsx"
import ConditionalRenderingclasscompo from "./ConditionalRenderingclasscompo.jsx"
import Controlledinclasscompo from "./Controlledinclasscompo.jsx"
import Uncontrolledinclasscompo from "./Uncontrolledinclasscompo.jsx"
import RestVsSpreadopinclasscompo from "./RestVsSpreadopinclasscompo.jsx"
import CompositonVsInheritanceinclasscompo from "./CompositonVsInheritanceinclasscompo.jsx"
import Arrayinclasscompo from "./Arrayinclasscompo.jsx"
import CSSinclasscompo from "./CSSinclasscompo.jsx"
import Stateliftinginclasscompo from "./Statelifting/Stateliftinginclasscompo.jsx"


class Introclassrouter extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Classcompo/>}>
                    <Route path='Constructor' element={<Constructorcompo/>}/>
                    <Route path='stateinclass' element={<Stateinclasscompo/>}/>
                    <Route path='propsinclass' element={<Propsinclasscompo/>}/>
                    <Route path='lifecycleinclass' element={<Lifecycleinclasscompo/>}/>
                    <Route path='JSXinclass' element={<JSXinclasscompo/>}/>
                    <Route path='Conditionalrenderinginclass' element={<ConditionalRenderingclasscompo/>}/>
                    <Route path='Controlledcompoclass' element={<Controlledinclasscompo/>}/>
                    <Route path='Uncontrolledcompoclass' element={<Uncontrolledinclasscompo/>}/>
                    <Route path='RestvsSpreadcompoclass' element={<RestVsSpreadopinclasscompo/>}/>
                    <Route path='CompositonVsInheritanceinclass' element={<CompositonVsInheritanceinclasscompo/>}/>
                    <Route path='Arrayinclass' element={<Arrayinclasscompo/>}/>
                    <Route path='CSSinclass' element={<CSSinclasscompo/>}/>
                    <Route path='Statelifting' element={<Stateliftinginclasscompo/>}/>

                    </Route>
                </Routes>  
                            
            </>
        );
    }
}

export default Introclassrouter;