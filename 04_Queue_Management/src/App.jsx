// import "./App.css";
import {useState} from "react";
import QueueForm from "./QueueForm";
import QueueDisplay from "./QueueDisplay";

export default function App(){
  const [queue, setQueue] = useState([]);
  const addToQueue = (customer) => {
    // code part
    console.log(customer);
    setQueue(preVal=>[...preVal,{...customer, id:Date.now(), status:"waiting"}]);
  }

  // a simple JS code
  const updateStatus = (id,newStatus)=>{
    // code part
    setQueue(queue.map(customer=>
      customer.id===id?{...customer, status:newStatus}:customer
    ));
  };

  const removeFromQueue = (id)=>{
    // code part 
    setQueue(queue.filter(customer=>customer.id !== id));
  };
  return (
    <div className="App">
      <header style={{backgroundColor:"lightblue",padding:"20px",marginBottom:"80px",borderBottom:"2px solid black"}}>
        <h1>Queue Management Application</h1>
        <p>Manage your coustomer efficiently</p>
      </header>
      <main style={{display:"flex",justifyContent:"space-around"}}>
          <QueueForm addCustomer={addToQueue} />
          <QueueDisplay
            queue={queue}
            updateStatus={updateStatus}
            removeFromQueue={removeFromQueue}
          />
      </main>
    </div>
  )
}