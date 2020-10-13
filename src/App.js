import React,{useState} from 'react';
import './App.css';
import Parent from './Parent.js';
import CreateCounter from './CreateCounter.js';




function App() {

  let valueSet=useState(1);
  
  return (
    <CreateCounter.Provider value={valueSet}>
    <div>
   <Parent name="child"/>
    </div>
    </CreateCounter.Provider>
  );
}

export default App;
