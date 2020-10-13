import React,{useReducer ,useState} from 'react';
import CounterReducer from './CounterReducer.js';
import './App.js';

const Child2= () =>{
let [setValue, incrementValue]=useReducer(CounterReducer, 1);
let [isMorning, isnight]=useState();
    return(
<div className={`box ${isMorning? 'morning' : ''}`}>
    <h1>Hello moiz we are doing increment every time via reducer: {setValue}</h1>
    <button onClick={() => incrementValue('INCREMENT')}>IncremntReducer</button>
    <button onClick={() => isnight(!isMorning)}>Chnage day</button>
    
</div>
    );
}
export default Child2;