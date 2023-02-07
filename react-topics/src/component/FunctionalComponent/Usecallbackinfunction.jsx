import React from 'react';
import { useCallback } from 'react';

const Usecallbackinfunction = () => {

    const clickHandler = useCallback(() => {
        console.log("called");
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => (res.json()))
            .then((response) => { console.log(response); })

    })
    const Buttonwraper = (({ clickhandlerfunc }) => {
        console.log("onclick");
        return <button onClick={clickhandlerfunc}>click me</button>
    })
    return (
        <>
            <Buttonwraper clickhandlerfunc={clickHandler}></Buttonwraper>
            {JSON.stringify()}
            <p>useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
        </>
    );
};

export default Usecallbackinfunction;