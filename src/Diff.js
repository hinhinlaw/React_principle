import React,{useState,useEffect,useLayoutEffect} from 'react';
import './App.css';

function Diff() {
  const [num, updateNum] = useState(0);

  // 更新前
  const a = (
    <ul>
      <li key="0">1</li>
      <li key="1">0</li>
      <li key="2">2</li>
    </ul>
  )

  // 更新后
  const b = (
    <ul>
      <li key="0">0</li>
      <li key="2">1</li>
      <li key="1">2</li>
    </ul>
  )

  return (
    <div className="App" onClick={()=>updateNum(num+1)}>
      {num % 2 ? b : a}
    </div>
  );
}

export default Diff;
