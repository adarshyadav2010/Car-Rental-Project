import React, {  createContext, useEffect, useState } from "react"



export const StateContextsData =createContext() ;


export default function StateContexts({children}){

    const [traveldata, setTravelData] = useState({
        origin: "",
        destination : "",
        startDate:"",
        endDate:"",
        distance: "",
        MapImg: ""
      });

// const [data, setData] = useState({
//     name:"",
//     type:"",
//     model:"",
//     milage:"",
//     image:"",
//     availableFrom:"",
//     availableTill:"",
//     perKm:"",
//     description:"",
//     carDetails:"",
//     Details:""
// });   

    return<>

        <StateContextsData.Provider value={{traveldata,setTravelData}}>
            {children}
        </StateContextsData.Provider>
    </>
}