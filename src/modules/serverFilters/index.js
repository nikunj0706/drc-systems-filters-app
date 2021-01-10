import React, {useEffect, useState} from "react";
import { marksToGbMapping, serverData } from "../../data/serverData";
import TableContainer from "./tableContainer.js";
import AllFilters from "./allFilters"

const locationList = [];
serverData.forEach((obj) => {
    if(!locationList.includes(obj.location)) {
        locationList.push(obj.location);
    }
})


const ServerFilters = () => {
   

    const [filteredServerData, setFilteredServerData] = useState(serverData);
    const [currentLocation, setCurrentLocation] = useState(locationList[0]);
    const [currentHDDType, setCurrentHDDType] = useState("SSD");
    const [checkBoxList, setCheckBoxList] = useState([]);
    const [currentRange, setCurrentRange] = useState(0);

    useEffect(() => {
        const data = serverData.filter((obj) => obj.hdd.includes(currentHDDType));

        const locationFilter = data.filter((obj) => obj.location.includes(currentLocation));
        let checkBoxFilterList = [];
        let rangeFilterList = [];

        if(checkBoxList && checkBoxList.length > 0 && locationFilter && locationFilter.length > 0) {
           
            locationFilter.forEach((obj) => {
                let toInclude = false;
                checkBoxList.forEach((cl) => {
                    const len = cl.length;
                    const subStr = obj.ram.substring(0, len);
                    if(subStr === cl) {
                        toInclude = true;
                    }
                })
                if(toInclude) {
                    checkBoxFilterList.push(obj);
                }
            })
           } else {
               checkBoxFilterList = locationFilter
           }
        if(currentRange > 0) {
            checkBoxFilterList.forEach((obj) => {
                const storageString = obj.hdd;
                const parts = storageString.split("x");
                let currentStorage;
                if(storageString.includes("TB")) {
                    const muliplicationNo1 = Number(parts[0]);
                    const muliplicationNo2 = Number(parts[1].split("TB")[0]) * 1000;
                    currentStorage = muliplicationNo1 * muliplicationNo2;
                   
                } else {
                    const muliplicationNo1 = Number(parts[0]);
                    const muliplicationNo2 = Number(parts[1].split("GB")[0]);
                    currentStorage = muliplicationNo1 * muliplicationNo2;
                }
               
                if(currentStorage <= marksToGbMapping[currentRange]) {
                    rangeFilterList.push(obj);
                }
            })
           
        } else {
            rangeFilterList = checkBoxFilterList;
        }
        setFilteredServerData(rangeFilterList);
       
        
    }, [
        currentHDDType,
        currentLocation,
        checkBoxList,
        currentRange
      ]
    )
   
    return (
        <>
        <AllFilters
            currentHDDType={currentHDDType}
            setCurrentHDDType={setCurrentHDDType}
            locationList={locationList}
            currentLocation={currentLocation}
            setCurrentLocation={setCurrentLocation}
            checkBoxList={checkBoxList}
            setCheckBoxList={setCheckBoxList}
            currentRange={currentRange}
            setCurrentRange={setCurrentRange}

         />
     <TableContainer filteredServerData={filteredServerData} />
     </>
    )
}

export default ServerFilters;