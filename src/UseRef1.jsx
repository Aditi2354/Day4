// import { useRef } from "react";

// export default function UseRef1(){
//     let ref =useRef(0)
//     function handleClick (){
//         ref.current = ref.current+1
//         alert('you clicked' + ref.current + 'times!')
//     }

//     return (
//         <button onClick={handleClick}>Click me</button>
//     )
// }
import { useState, useRef ,useEffect} from 'react';

export default function UseRef1() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });
function handleClick(){
   renderCount.current = renderCount.current+1
   alert (renderCount.current.value)
   console.log('useref',renderCount.current)
}
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <button onClick={handleClick}>Click here</button>
    </div>

  );
}