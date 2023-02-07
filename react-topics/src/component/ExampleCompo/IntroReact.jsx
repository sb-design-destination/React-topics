import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Reactquestion from "./Reactquestion.jsx"

class IntroReact extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Reactquestion/>}></Route>
                </Routes>
            </>
        );
    }
}

export default IntroReact;