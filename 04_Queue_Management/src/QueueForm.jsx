import {useState} from "react";
import {FaUserPlus} from "react-icons/fa"
export default function QueueForm({addCustomer}){
    const [name,setName] = useState("");
    const [service,setService] = useState("");

    const handleSublit = (e)=>{
        e.preventDefault();
        if(!name.trim() || !service.trim()) return;
        // console.log(name,service);
        addCustomer({name,service});
        setName("");
        setService("");
    }
    return (
        <div>
            <form className="queue-form" onSubmit={handleSublit} style={{display:"flex",flexDirection:"column",gap:"10px",border:"1px solid black",padding:"20px",width:"100%",backgroundColor:"lightgray"}}>
                <h2>Add to Queue</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        placeholder="Customer name"
                        id="name" 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="service">Service:</label>
                    <select onChange={(e)=>setService(e.target.value)}>
                        <option value="consultation">Consultation</option>
                        <option value="payment">Payment</option>
                        <option value="support">Support</option>
                    </select>
                </div>
               <button type="submit"><FaUserPlus /> Add Customer</button>
            </form>
        </div>
    )
}