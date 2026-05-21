import {useState} from "react"; // hooks
import "./App.css";
export default function App() {

  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  const increment = ()=>{
    setCount((prev)=>prev+1);
  }

  const decrement = ()=>{
    setCount((prev)=>Math.max(0,prev-1));
  }

  const reset = ()=>{
    setCount(0);
  }
  return(
    <div id="body">
      <h1>Counter is {count}</h1>
      <div className="card">Count is {count}</div> 
      <div>
        <button style={{margin:"0 5px", }} onClick={()=>increment()}>Increment</button>
        <button style={{margin:"0 5px", }} onClick={()=>decrement()}>Decrease</button>
        <button style={{margin:"0 5px", }} onClick={()=>reset()}>Reset</button>  
        <div style={{margin:"10px 0"}}>
          <input style={{width:"100px", border:"1px solid white", margin:"0 5px", padding:"0.6em 1.2em"}} value={countToSet} type="text" onChange={((e)=>{setCountToSet(Number(e.target.value))})}/>
          <button style={{margin:"0 5px"}} onClick={()=>setCount(Number(countToSet))}>Set to {countToSet}</button>    
        </div>
      </div>
    </div> 
  )
}











































// export default function App() {
//   return(
//       <div id="body">
//         <h1>Counter</h1>
//         <div className="card">Count is 37</div>
//         <div>
          
//           <button style={{margin:"0 5px", }} onClick={()=>{}}>Increment</button>
//           <button style={{margin:"0 5px", }} onClick={()=>{}}>Decrease</button>
//           <button style={{margin:"0 5px", }} onClick={()=>{}}>Reset</button>
//         </div>

        // <div style={{margin:"10px 0"}}>
        //   <input style={{width:"100px", border:"1px solid white", margin:"0 5px", padding:"0.6em 1.2em"}} value="8" type="text" onChange={()=>{}}/>



        //   <button style={{margin:"0 5px"}} onCLick={()=>{}}>Set to 8</button>    
        // </div>
//       </div>
//   )
// }