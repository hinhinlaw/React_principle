import React,{useState} from 'react'

export default function TimeSplit() {
  const [len, updateLen] = useState(30000);
  // const len = 30000;
  const onClick = () => {
    updateLen(len => len+1);
  }
  return (
    <div onClick={onClick}>
      {Array(len).fill(0).map((_,i)=> <li key={i}>{len - i}</li>)}
    </div>
  )
}
