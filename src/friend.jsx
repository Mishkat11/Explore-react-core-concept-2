export default function Friend({friend}){
    console.log(friend);
return(
    <div>
        <h3>Name: {friend.name} </h3>
        <p>Email: {friend.email} </p>
    </div>
)
}