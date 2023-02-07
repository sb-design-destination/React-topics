import React, { Component } from 'react';
import "./Custom.css";

class CSSinclasscompo extends Component {

    render() {
        const CustomCSS = {
            color: "blue",
            backgroundColor: "yellow"
        }
        return (
            <>
                <p style={CustomCSS}>Testing</p>
                <p style={{ color: "blue",backgroundColor: "yellow"}}>Test</p>
                <h2>test</h2>
            </>
        );
    }
}

export default CSSinclasscompo;