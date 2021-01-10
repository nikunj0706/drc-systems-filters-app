import React from "react";
import "./tableContainer.css";

const TableContainer = (props) => {
    const { filteredServerData } = props;
    console.log("server data:::", filteredServerData);
    return (
        <div className="table-container">
       
        <table>
        
        {
           filteredServerData && filteredServerData.length > 0 ?
           <caption>Total Records - {filteredServerData.length}   </caption> :
           <caption>No Records Found  </caption>
        }
      
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