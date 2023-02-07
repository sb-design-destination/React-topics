import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseeffectandUselayoutinfunction = () => {
    const [data,setData] = useState()
//   useeffect simple
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then((res)=>res.json())
    //     .then((response)=>{console.log(response);
    //      setData(response);
    //     })
    // })

     // useEffect is return with means didupdate(unmount)
    //  useEffect(()=>{
    //     return ()=>{
    //         fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then((res)=>res.json())
    //         .then((response)=>{console.log(response);
    //          setData(response);
    //         })
    //     }     
    // })
    // useefect with conditional rerndering
    useEffect(()=>{
        
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res)=>res.json())
            .then((response)=>{console.log(response);
             setData(response);
            })   
    },[])
    return (
        <>
            {JSON.stringify(data)}
        </>
    );
};

export default UseeffectandUselayoutinfunction;