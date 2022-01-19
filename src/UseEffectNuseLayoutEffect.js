// useEffect与useLayoutEffect的执行时机区别
import React,{useState,useEffect,useLayoutEffect} from 'react'

export default function UseEffectNuseLayoutEffect() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    if(count === 2222222222222){
      const dom = document.querySelector('div');
      // const randomNum = 10 + Math.random() * 200;
      const now = performance.now();
      while(performance.now() - now < 100){}; // 将js线程阻塞100毫秒
      // setCount(randomNum);
      dom.innerText = 11111;
    }
  },[count])

  return (
    <div onClick={()=>setCount(2222222222222)}>
      {count}
    </div>
  )
}
