import React,{useContext} from 'react';
import CreateCounter from './CreateCounter.js';

const Child = (props) =>{
    let counterValue=useContext(CreateCounter);


    return(
<div>
<h1>hello abdul moiz we are on now {props.name} </h1> 
    <h2>We are doing the counting via ContextAPI: {counterValue[0]}</h2>
    <button onClick={() => counterValue[1](++counterValue[0])}>Incremnt Context</button>
</div>
    );
}
export default Child;