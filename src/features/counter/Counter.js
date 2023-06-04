import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice'
import css from './Counter.module.css'


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }
return (
    <section className={css.Counter}>
        <h1 className={css.CounterTitle}>Try Counter!</h1>
        <p className={css.CounterText}>{count}</p>
        <div>
            <button className={css.CounterButton} onClick={()=>dispatch(increment())}>+</button>
            <button className={css.CounterButton} onClick={()=>dispatch(decrement())}>-</button>

        </div>

        <input
            className={css.CounterInput}
            type='text'
            value={incrementAmount}
            onChange={(e)=> setIncrementAmount(e.target.value)}
        />

        <div>
            <button className={css.CounterButton} onClick={()=> dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button className={css.CounterButton} onClick={resetAll}>Reset All</button>
        </div>
    </section>
)
}

export default Counter
