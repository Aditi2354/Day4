import { useCallback ,useState} from "react";
const functSet = new Set()
export default function Callback(){
    const[num,setNum] =useState(0)
    const[prev,setPrev] = useState(0)
 
    const incPrev= useCallback(()=> setPrev(prev+1),[prev])
    const decPrev = useCallback(()=> setPrev(prev-1), [prev])
    const incNum=  useCallback(()=> setNum(num+1),[num])

    functSet.add(incPrev)
    functSet.add(decPrev)
    functSet.add(incNum)
     alert(functSet.size)
     
     return (
        <>
        <div>
            <h1>with use Callback hook</h1>
            <div>
                <button onClick={incPrev}>Increment</button>
                <h1>{prev}</h1>
              
            </div>
            
            <button onClick={decPrev}>Decrement</button>
            <div>
           <button  onClick={incNum}>Number</button>
           <h1>{num}</h1>
            </div>
           
        </div>
        </>
     )

}