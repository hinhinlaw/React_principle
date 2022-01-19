import React,{useEffect,useState,useRef} from 'react'

export default function InterruptDetail() {
  const buttonRef = useRef(null);
  const [count, updateCount] = useState(0);

  const onClick = () => {
    updateCount(count => count + 2);
  }

  useEffect(()=>{
    const button = buttonRef.current;
    setTimeout(()=>{
      updateCount(1)
    },1000);
    setTimeout(()=>{
      button.click()
    },1040);
  },[])

  return (
    <div>
      <button ref={buttonRef} onClick={onClick}>增加</button>
      <div>
        {
          Array.from(new Array(1000)).map((v,index)=>{
            return <span key={index}>{count}</span>
          })
        }
      </div>
    </div>
  )
}
