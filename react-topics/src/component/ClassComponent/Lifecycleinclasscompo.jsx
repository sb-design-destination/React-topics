import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lifecycleinclasscompo extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state={data:"Something"}

    }

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }
    
    componentDidMount() {
        console.log("componentDidMount");
        
    }
    
    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps");
    // }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
        // return false;
    }
    
    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // }
    
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("componentDidUpdate");
    // }
    
    // componentWillUnmount() {
    //     console.log("componentWillUnmount");
        
    // }
    ClickHandle=()=>{
        console.log("click");
        this.setState({data:"new data"})
    }
    render() {
        console.log("Render");
        return (
            <>
                Render<br/>
                {/* <input type="text" /> */}
                {this.state.data}
                <button onClick={this.ClickHandle}>Clicked</button>
            </>
        );
    }
}


export default Lifecycleinclasscompo;




