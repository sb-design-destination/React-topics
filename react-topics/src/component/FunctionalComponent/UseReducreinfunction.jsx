import React from 'react';
import { useReducer } from 'react';
function init() {
    console.log("init");
    return {count:0,countfordec:10}
}
function reducer(state,action) {
    console.log("action",state);
    console.log("type",action);
    switch (action.type) {
        case "increment":
            return {count:state.count+1}
            case "dicrement":
                return{countfordec:state.countfordec-1}
    
        default:
            break;
    }
}

const UseReducreinfunction = (initialCount) => {
    console.log("usereducer");
    const [state,dispatch]=useReducer(reducer,initialCount,init)
    return (
        <>
            <button onClick={()=>{dispatch({type:"increment"})}}> click{state.count}</button>
            <button onClick={()=>{dispatch({type:"dicrement"})}}> click{state.countfordec}</button>
        </>
    );
};

export default UseReducreinfunction;