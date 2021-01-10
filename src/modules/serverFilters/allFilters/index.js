import React from "react";
import { Checkbox, Slider } from "antd";

const CheckboxGroup = Checkbox.Group;

const ramOptions = [
    { label: '2GB', value: '2GB' },
    { label: '4GB', value: '4GB' },
    { label: '8GB', value: '8GB' },
    { label: '12GB', value: '12GB' },
    { label: '16GB', value: '16GB' },
    { label: '24GB', value: '24GB' },
    { label: '32GB', value: '32GB' },
    { label: '48GB', value: '48GB' },
    { label: '64GB', value: '64GB' },
    { label: '96GB', value: '96GB' },
  ];



  const marks1 = {
      0: "0",
      1: "250GB",
      2: "500GB",
      3: "1TB",
      4: "2TB",
      5: "3TB",
      6: "4TB",
      7: "8TB",
      8: "12TB",
      9: "24TB",
      10: "48TB",
      11: "72TB"
  }

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
        <select onChange={(e) => setCurrentHDDType(e.target.value)} value={currentHDDType} id="hdType" name="hdType">
                <option value="SAS">SAS</option>
                <option value="SATA">SATA</option>
                <option value="SSD">SSD</option>
            </select>
        </div>
           <div>
           <select onChange={(e) => setCurrentLocation(e.target.value)} value={currentLocation} id="location" name="location">
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
            marks={marks1} step={null} defaultValue={0} value={currentRange} />
           
          
        </div>
    )

}

export default AllFilters;