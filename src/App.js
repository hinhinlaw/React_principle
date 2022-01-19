import React,{useState,useEffect,useLayoutEffect} from 'react';
import './App.css';

function App() {
  const [num, updateNum] = useState(0);

  useEffect(()=>{
    console.log('react')
  },[num])

  useLayoutEffect(()=>{
    if(num === 2){
      updateNum(num + 'layout!');
    }
  },[num])

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={()=>updateNum(num+1)}>
          <code title={num}>{num}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
