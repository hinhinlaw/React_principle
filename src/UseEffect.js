import React,{useState, useEffect} from 'react'

export default function UseEffect() {
  const [num, updateNum] = useState(0);

  useEffect(()=>{
    console.log('mount啦～～');
  },[])
  
  return (
    <div onClick={()=>updateNum(num + 1)}>
      {num}
    </div>
  )
}
