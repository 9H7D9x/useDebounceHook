import React,{useEffect, useState} from 'react'
import useDebounceValueHook from './useDebounceValueHook';

const App = () => {
    const[value,setValue]=useState()
    const debounceValue=useDebounceValueHook(value,5000);

    useEffect(()=>{
         fetch("")
    },[debounceValue])
  return (
    <div>
        Debounced value is  {debounceValue}
        <input type="text"
        placeholder="write some "
        // value={inputValue}
        onChange={(e)=>{
            setValue(e.target.value);
        }}></input>
    </div>
  )
}

export default App