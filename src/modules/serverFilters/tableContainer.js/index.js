import React from "react";
import "./tableContainer.css";

const TableContainer = (props) => {
    const { filteredServerData } = props;
    console.log("server data:::", filteredServerData);
    return (
        <div className="table-container">
         {
           filteredServerData && filteredServerData.length > 0 ?
           <h3>Total Records - {filteredServerData.length}   </h3> :
           <h3>No Records Found </h3>
        }
       
        <table>
        
       
      
            <tr>
                <th>Model</th>
                <th>RAM</th>
                <th>HDD</th>
                <th>Location</th>
                <th>Price</th>
            </tr>
  {
    filteredServerData && filteredServerData.length > 0 && filteredServerData.map((obj) => (
        <tr key={obj.id}>
        <td>{obj.model}</td>
        <td>{obj.ram}</td>
        <td>{obj.hdd}</td>
        <td>{obj.location}</td>
        <td>{obj.price}</td>
        </tr>
    ))
  }
</table>
 </div>
    
    )
}

export default TableContainer;