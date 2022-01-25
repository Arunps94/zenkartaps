import React from "react";
const ViewDisplay = (props) => {
    
    const renderTable = ({bookdata}) => {
        if (bookdata){
            return bookdata.map((item) =>{
                console.log("item",item)
                return (
                    
                    <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.product_name}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>₹{item.cost}</td>
                            <td>{item.address}</td>
                            <td>{item.date}</td> 
                            <td>{item.status}</td>   
                            <td>{item.bank}</td>           
                    </tr>
                )
            })
        }
    }

        return (<>
            
            <div className="container">
                <center>
                    <h2>Order List</h2>
                </center>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">OrderId</th>
                            <th scope="col">Poduct Name</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Address</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">BankName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable(props)}
                        
                    </tbody>
                </table>
            </div>
            </>
        );
    
}

export default ViewDisplay;
