
import './App.css'
import Counter from './counter'
import Team from './Team'
import User from './user'
import Friends from './friends'

function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 =()=>{alert('second button clicked')}
  const handleClick4 =(num)=>{alert(num+4)}
    return (
    <>
     <h3>React core concepts 2</h3>
     <Friends></Friends>
    <User></User>
    <Team></Team>
 <Counter></Counter>


     {/* new way of adding onClick */}
     
     <button onClick={handleClick} >Click me</button>
    <button onClick={handleClick2}>Click 2</button>
    <button onClick={()=>alert('third is clicked')}>Third</button>

    {/* bhejailla but important for handling parameters  */}
    <button onClick={()=>handleClick4(0)}>Fourth</button>
    </>
  )
}

export default App
