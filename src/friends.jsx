import { useEffect, useState } from "react"
import Friend from "./friend"
export default function Friends(){
    const [friends, setFriends] = useState([])
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then (res => res.json())
       .then(data =>setFriends(data) )
    },[])
    return(
        <div>
            {/* <Friend fri={}></Friend> */}
            <h2>friends : {friends.length}</h2>
            {
                friends.map(friend=> <Friend friend={friend}></Friend>)
            }
        </div>
    )
}