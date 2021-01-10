import React from "react";
import { Checkbox, Slider } from "antd";
import { marks, ramOptions } from "../../../data/serverData"

const CheckboxGroup = Checkbox.Group;

const AllFilters = (props) => {

    const {
        currentHDDType,
        setCurrentHDDType,
        locationList,
        currentLocation,
        setCurrentLocation,
        checkBoxList,
        setCheckBoxList,
        currentRange,
        setCurrentRange
    } = props;
    
    return (
        <div>
        <div>
        <select style={{width: "150px", marginBottom: "10px", marginTop: "10px"}} onChange={(e) => setCurrentHDDType(e.target.value)} value={currentHDDType} id="hdType" name="hdType">
                <option value="SAS">SAS</option>
                <option value="SATA">SATA</option>
                <option value="SSD">SSD</option>
            </select>
        </div>
           <div>
           <select style={{width: "150px", marginBottom: "10px", marginTop: "10px"}} onChange={(e) => setCurrentLocation(e.target.value)} value={currentLocation} id="location" name="location">
            {
                locationList && locationList.length > 0 && locationList.map((location) => (
                    <option key={location} value={location}>{location}</option>
                ))
            }
            </select>
           </div>

           <div>
            <CheckboxGroup 
                options={ramOptions}
                value={checkBoxList}
                onChange={(list) => setCheckBoxList(list)}
            />
           </div>

           
           <Slider
           
           min={0}
           max={11}
           onChange={(value) => setCurrentRange(value)}
            marks={marks} step={null} defaultValue={0} value={currentRange} />
           
          
        </div>
    )

}

export default AllFilters;