import {useState,useEffect} from 'react'
import axios from 'axios'
import React from 'react'
const Searchbar =()=>{
    const[value,setValue] =useState('')
    const [suggestions,setSuggestions ] =useState([])
    useEffect(()=>{
    const fetchData = async ()=>{
     try {
        const {data} = axios.get(
            `https://dummyjson.com/products/search?q=${value}`
        )
        setSuggestions(data.products)
     }
     catch(error){
     console.log(error)
     }
    }
    fetchData()
    },[value])
    return (
        <>
        <div>

            <input
            type='text'
            placeholder='search data'
            value={value}
            onChange={(e)=> {
                setValue(e.target.value)
            }}
            />

        </div>
        </>
    )
}

export default React.memo(Searchbar)