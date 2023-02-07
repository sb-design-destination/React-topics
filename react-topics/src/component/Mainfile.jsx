import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Headerfile from "../component/Headerfile.jsx";

class Mainfile extends Component {
    render() {
        return (
            <>
                <Headerfile></Headerfile>
                <Outlet></Outlet>
            </>
        );
    }
}

export default Mainfile;