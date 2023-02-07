import React, { Component, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Mainfile from "../component/Mainfile.jsx";
import ExampleCompo from "../component/ExampleCompo.jsx";

class Mainrouter extends Component {

    render() {
        const Introclassrouter = React.lazy(() => {return import("../component/ClassComponent/Introclassrouter.jsx") });
        const Introfunctionalrouter = React.lazy(() => {return import("../component/FunctionalComponent/Introfunctionalrouter.jsx") });
        const IntroReact = React.lazy(()=>{return import("../component/ExampleCompo/IntroReact.jsx")});
        return (
            <>
                <Routes>
                    <Route path='/' element={<Mainfile />}>
                        <Route path='example/' element={<ExampleCompo />}>
                            <Route path="ClassComponent/*" element={<Suspense fallback={<h1>loading...</h1>}>
                                <Introclassrouter/></Suspense>} ></Route>
                                <Route path="FunctionalCompo/*" element={<Suspense fallback={<h1>loading...</h1>}>
                                <Introfunctionalrouter/></Suspense>} ></Route>
                                <Route path='ExampleCompo/*' element={<Suspense fallback={<h1>Loading..</h1>}><IntroReact/></Suspense>}></Route>
                        </Route>
                    </Route>
                </Routes>
            </>
        );
    }
}

export default Mainrouter;