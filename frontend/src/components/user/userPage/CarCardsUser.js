import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CarCardsUser({car}) {
    const navigate =useNavigate();
    return (
        <div className="car-container">
            <div className="img-container">
                <img src={``} id="car-img" alt="img-car"/>
            </div>
            <div className="card-2nd">
                <div className="car-details">
                    <span>name</span> 
                    <span className="distance-det">per km KM/RS</span>
                </div>
                <div className="person-nos">6 person</div>
            </div>
            
            <div className="user-date-details">
                <span className="fare">Fare Details</span>
                <Link to='/booknow'><span className="booknow">Book Now</span></Link>
            </div>
        </div>
    )
}