
import Child from "./Child";
import { useState } from "react";
export default function Parent(){
const[count , setCount] = useState(0)

const handle=()=>{
    setCount((count+1))
}
return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={handle}>click me</button>
    <Child name="Aditi"/>
    </>
)
}