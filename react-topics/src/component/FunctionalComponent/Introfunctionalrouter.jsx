import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Functionalcompo from "./Functionalcompo.jsx";
import StateinFunctionalcompo from "./StateinFunctionalcompo.jsx";
import APIinFunctionalcompo from "./APIinFunctionalcompo.jsx";
import UseeffectandUselayoutinfunction from "./UseeffectandUselayoutinfunction.jsx";
import Usecontextinfunctional from "./Usecontextinfunctional.jsx";
import Formstatebindinginfunction from "./Formstatebindinginfunction.jsx";
import Usecallbackinfunction from "./Usecallbackinfunction.jsx";
import UseMemoinfunction from "./UseMemoinfunction.jsx";
import UseReducreinfunction from "./UseReducreinfunction.jsx";

const Introfunctionalrouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Functionalcompo />}>
                    <Route path='Stateinfunction' element={<StateinFunctionalcompo />} />
                    <Route path='Apiinfunction' element={<APIinFunctionalcompo />} />
                    <Route path='UseeffectandUselayoutinfunction' element={<UseeffectandUselayoutinfunction />} />
                    {/* <Route path='Usecontextinfunctional' element={<Usecontextinfunctional />} />
                    <Route path='Formstatebindinginfunction' element={<Formstatebindinginfunction />} /> */}
                    <Route path='Usecallbackinfunction' element={<Usecallbackinfunction />} />
                    <Route path='Usememoinfunction' element={<UseMemoinfunction />} />
                    <Route path='Usereducreinfunction' element={<UseReducreinfunction />} />
                </Route>
            </Routes>
        </>
    );
};

export default Introfunctionalrouter;