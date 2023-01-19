import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types'

const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

function Test1(props) {
    const { countProps, setCountProps } = props;

    useEffect(() => {
        console.log("mounted or updated");
    });

    useEffect(() => {
        
    });

    const prevCountProps = usePrevious(countProps);

    return (
        <div className="container">
            <p>{countProps}</p>
            <p>{prevCountProps}</p>
            <div className="row">
                <button className="col-6" onClick={() => setCountProps(countProps + 1)}>+</button>
                <button className="col-6" onClick={() => setCountProps(countProps - 1)}>-</button>
            </div>

        </div>
    )
}

const Test = () => {
    const [count, setCount] = useState(0);

    return <Test1 countProps={count} setCountProps={setCount} />;
};
Test.propTypes = {}

export default Test;
