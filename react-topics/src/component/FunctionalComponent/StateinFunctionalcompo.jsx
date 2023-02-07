import React from 'react';
import { useState } from 'react';

const StateinFunctionalcompo = () => {
        const [data,setCount] = useState(0);

    const Clickdata=()=>{
            console.log("data");
            setCount(data +1)
        }
    return (
        <>
            {data}
            <button onClick={Clickdata}>Click</button>
        </>
    );
};

export default StateinFunctionalcompo;