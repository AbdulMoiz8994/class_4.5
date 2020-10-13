import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer.js';


const Child2= () =>{
let [setValue, incrementValue]=useReducer(CounterReducer, 1);
    return(
<div>
    <h1>Hello moiz we are doing increment every time via reducer: {setValue}</h1>
    <button onClick={() => incrementValue('INCREMENT')}>IncremntReducer</button>
</div>
    );
}
export default Child2;