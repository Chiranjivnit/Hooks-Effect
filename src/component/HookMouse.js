import React, { useState, useEffect } from 'react';

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMouseposition = (e) => {
        console.log('mouse evevt log');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMouseposition)
        return()=>{
            console.log('Component unmount code');
            window.removeEventListener('mousemove',logMouseposition)
        }
    }, []
    )

    return (
        <div>
         Hoooks X - {x}
         Hooks Y - {y}
        </div>
    )
}

export default HookMouse;