import React, { useContext } from "react";
import UserNav from "../../navbar/UserNav";
import { useNavigate } from 'react-router-dom';
import UserHeader from "./UserHeader";
import CarCardsUser from "./CarCardsUser";
import { StateContextsData } from "../../context/StateContext";


export default function () {
    const {carDataDetails, setCarDataDetails} = useContext(StateContextsData)
    return (
        <div className='admin-container'>
            <UserNav />
            <br />
            <UserHeader />
            <br />
            <div className='header-cls'>
                
            </div>
            <div className="user-container">
                <CarCardsUser cardetails={carDataDetails}/>
                <CarCardsUser/>
                <CarCardsUser/>
                <CarCardsUser/>
                <CarCardsUser/>
                <CarCardsUser/>
                <CarCardsUser/>
                <CarCardsUser/>
            </div>
        </div>
    )
}
