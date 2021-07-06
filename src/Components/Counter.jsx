import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './styles/Counter.css';

export default function Counter() {
    const counter = useSelector ((state) => state.number);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter</h1>
            <h3>{counter}</h3>
            <div>
                <button className="btn" onClick={()=> dispatch({ type: 'INCREASE' })}>+</button>
                <button className="btn" onClick={()=> dispatch({ type: 'DECREASE' })}>-</button>
                <button className="btn" onClick={()=> dispatch({ type: 'RESET' })}>Reset</button>
            </div>
        </div>
    )
}