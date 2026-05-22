import React from 'react'

function QueueDisplay({queue, updateStatus, removeFromQueue}) {

    const getStatusColor = (status) => {
        switch (status) {
            case "waiting":
                return { color: "orange" };
            case "serving":
                return { color: "green" };
            case "completed":
                return { color: "blue" };
            default:
                return { color: "black" };
        }
    }

    return (
        <div className="queue-display" style={{width:"40%",border:"1px solid black",padding:"20px"}}> 
            <h1>Queue Display</h1>
            {queue.length === 0 ? (<p className="empty-queue"> "No customer data"</p>) : (
                <div className="queue-list" style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                    {queue.map(customer=>(
                        <div className="queue-item" key={customer.id}>
                            <p><b>{customer.name}</b>&nbsp;{customer.service}</p>
                            <p></p>
                            <span className="status" style={getStatusColor(customer.status)}>{customer.status}</span>
                            <div className="actions" style={{marginTop:"10px"}}>
                                {customer.status === "waiting" && (<button onClick={() => updateStatus(customer.id, "serving")}>Serve</button>)}

                                {customer.status === "serving" && (<button onClick={() => updateStatus(customer.id, "completed")}>Complete</button>)}

                                <button onClick={() => removeFromQueue(customer.id)}>Remove</button>
                                <hr />
                            </div>
                        </div>
                        
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default QueueDisplay
