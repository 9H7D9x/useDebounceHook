import React, { useEffect, useState } from 'react'

const useDebounceValueHook = (value, timeout) => {
    
  const[debounceValue,setDebounceValue]=useState(value);
  
  useEffect(()=>{
    const timerId=setTimeout(()=>{
        setDebounceValue(value);
    },timeout);
    return ()=>{
        clearTimeout(timerId);
    }
    
  },[value])
  return debounceValue;
}

export default useDebounceValueHook