import React,{useState,} from 'react';
import HookMouse from './HookMouse';

const MouseContainer=()=>{
    const [display, setDisplay] = useState(true);

    return (
        <div>
            {display && <HookMouse/>}
            <button onClick={()=>setDisplay(!display)} >Toggle</button>
        </div>
    )
}

export default MouseContainer;
