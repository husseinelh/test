// Child.jsx
import { useState, useEffect } from "react";

const Child = ({ setBooleanValue }) => {

    const [value2, setValue2] = useState(false);

    useEffect(() => {
        console.log('CHILD, each render');
    })

    useEffect(() => {
        console.log('CHILD, each \'value2 change\' render');
    }, [value2])

    useEffect(() => {
        console.log('CHILD, render on componentDidMount');
        changeBooleanValue2(true)
    }, [])

    const changeBooleanValue2 = (param) => {
        setValue2(param);
    }

    return (
        <>
            <h2>Child</h2>
            <button onClick={() => setBooleanValue(false)}>Click Me Child State Change</button>
        </>
    );
}

export default Child;