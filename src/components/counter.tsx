import { FC, useState } from 'react';
import classes from './counter.module.scss';

export const Counter: FC = () => {
    const [counter, setCounter] = useState(0);
    const onClickHandler = () => {
        setCounter(counter + 1);
    }
    return <div>
        <h1>{counter}</h1>
        <button className={classes.button} onClick={onClickHandler}>increment</button>
    </div>
}
