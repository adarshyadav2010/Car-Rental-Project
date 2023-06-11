import React, { createContext, useEffect, useState } from "react"



export const StateContextsData = createContext();


export default function StateContexts({ children }) {

    const [cars, setCars] = useState([])
    const [edit, setEdit] = useState({});

    const [headerData, setheaderData] = useState({});
    const [CarData, setCarData] = useState({});
    const [bookingDetails, setBookingDetails] = useState([]);
    const [Bookdata, setBookData] = useState([])
    const [traveldata, setTravelData] = useState({
        origin: "",
        destination: "",
        startDate: "",
        endDate: "",
        distance: "",
        MapImg: ""
    });

    const [carDataDetails, setCarDataDetails] = useState({
        name: "",
        type: "",
        model: "",
        milage: "",
        image: "",
        availableFrom: "",
        availableTill: "",
        perKm: "",
        description: "",
        carDetails: "",
        Details: ""
    });

    return <>

        <StateContextsData.Provider value={{ cars, setCars, carDataDetails, setCarDataDetails, edit, setEdit, headerData, setheaderData, CarData, setCarData, bookingDetails, setBookingDetails, Bookdata, setBookData, traveldata, setTravelData }}>
            {children}
        </StateContextsData.Provider>
    </>
}