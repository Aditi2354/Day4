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
  let renderCount = useRef(8);

  useEffect(() => {
    renderCount.current++;
  });
function handleClick(){
   renderCount.current.value = 2
}
  return (
    <div>
      {/* <p>Count: {renderCount.current.value}</p> */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span></span>
      <button onClick={handleClick}>Click here</button>
    </div>

  );
}