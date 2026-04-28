import {useState,useMemo} from 'react'


export default function HeavyCalculation(){
    const[number,setNumber] = useState(0)
    const squaringNum = useMemo(()=> squaredNum(number),[number])
    const handleNumber = (e)=>{
        setNumber(e.target.value)
    }
   
    return (
        <>
        <div>
            <h1>welcome to calculate square of numbers</h1>
            <input  
            type='number'
            placeholder='write a number'
            value={number}
            onChange={handleNumber}
            >
            </input>
            <div>Output is :{squaringNum}</div>
        </div>
        </>
    )

    
}

function squaredNum(number){
console.log('squarring will be done')
return Math.pow(number,2)
}