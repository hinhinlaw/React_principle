import React,{useState} from 'react';

function Text(){
  return <p ref={dom => console.log('domRef:',dom)}>Hello</p>
}

export default function UseRef() {
  const [show, showText] = useState(true);
  return (
    <div onClick={()=>showText(!show)}>
      {show && <Text/>}
    </div>
  )
}
