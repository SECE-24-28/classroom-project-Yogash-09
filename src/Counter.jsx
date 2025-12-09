import './Counter.css';
import { useState } from "react";

function Counter(){

    const [Count,setCount] = useState(0);


    return(
    <div className='box'>
    <h1>{Count}</h1>
    <button onClick={()=>setCount(Count+1)}>Increase</button>
    <button onClick={()=>setCount(Count-1)}>Decrease</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </div>)

}

export default Counter;