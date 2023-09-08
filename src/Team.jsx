import { useState } from "react"

export default function Team (){
    const [player,setPlayer]= useState(11)
    const handleAdd =()=>{
        const newPlayer = player+1 
        setPlayer(newPlayer)
    }
    const handleRemove =()=>{
        const newPlayer = player-1  
        setPlayer(newPlayer)
    }
    const styles = {
        margin:'20px',
        border:'2px yellow solid',
        padding:'20px'
    }
    return(
        <div style={styles}>
            <h3>Players: {player} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}