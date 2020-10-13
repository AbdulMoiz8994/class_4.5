import React,{useContext,useState} from 'react';
import CreateCounter from './CreateCounter.js';

const Child = (props) =>{
    let counterValue=useContext(CreateCounter);
    let [isMorning, isnight]=useState();


    return(
<div className={` ${isMorning? 'night' : 'day'}`}>
<h1>hello abdul moiz we are on now {props.name} </h1> 
    <h2>We are doing the counting via ContextAPI: {counterValue[0]}</h2>
    <button onClick={() => counterValue[1](++counterValue[0])}>Incremnt Context</button>
    <button onClick={() => isnight(!isMorning)}>Chnage day</button>

</div>
    );
}
export default Child;