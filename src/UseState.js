import React,{useState} from 'react';
import './App.css';

export default () => {
  const [num, updateNum] = useState(0);

  return <div onClick={()=>updateNum(num + 1)}>{num}</div>
}