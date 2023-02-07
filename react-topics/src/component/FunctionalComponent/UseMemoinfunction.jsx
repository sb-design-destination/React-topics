import React from 'react';

const UseMemoinfunction = () => {
    return (
        <>
            <p><mark>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</mark></p>
            <p>Fundamentally, useMemo and useCallback are tools built to help us optimize re-renders. They do this in two ways: Reducing the amount of work that needs to be done in a given render. Reducing the number of times that a component needs to re-render</p>
        </>
    );
};

export default UseMemoinfunction;