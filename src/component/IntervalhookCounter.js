import React,{useState,useEffect} from 'react';
const IntervalHookCounter = () => {
 const [count,setCount] = useState(0)

 const tick=()=>{
     setCount(count + 10)
 }

 useEffect(()=>{
     const interval= setInterval(tick,1000)
     return ()=>{
       clearInterval(interval)
     }
 },[count])
    return (
        <div>
         {count}
        </div>
    )
}
export default IntervalHookCounter;

