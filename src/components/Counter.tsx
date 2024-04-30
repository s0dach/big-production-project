import React from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = React.useState(0)
    return (
        <div className={classes.container}>
            <div onClick={() => setCount(count + 1)}>click</div>
            <div>{count}</div>
        </div>
    );
};

export default Counter;