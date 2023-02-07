import React from 'react';
import { useState } from 'react';

const APIinFunctionalcompo = () => {
    const [data,setData] = useState();
    console.log(data);

   const Clickchange=()=>{
    console.log(data+1);
        setData(data+1)
    }
fetch('https://jsonplaceholder.typicode.com/todos')
.then((res)=>res.json())
.then((response)=>{console.log(response);
setData(response)
},[])

    return (
        <>
          {data}
            <button onClick={Clickchange}>click</button>
            {JSON.stringify(data)}
            
        </>
    );
};

export default APIinFunctionalcompo;