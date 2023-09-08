import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0)
    const handleAdd =()=>{
const add = count +1
setCount(add)
    }
    const handleReduce =()=>{
const reduce = count -1
setCount(reduce)
    }
    return(
        <div style={{border:'2px solid red', margin:'29px' ,padding:'30px'}}>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}