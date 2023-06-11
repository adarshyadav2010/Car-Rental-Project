import React from "react";

export default function CarCards({car}) {
    return (
        <div className="car-container">
            <div className="img-container">
                <img src={``} id="car-img" alt="img-car"
                    onClick={() => {
                        // if (AdminId !== d.AdminId) {
                        //     console.log(d.AdminId)
                        //     setErr("You Don`t Have Access To Edit This Details");
                        //     setOk("OK")
                        // }
                        // else {
                        //     console.log(d.AdminId)
                        //     setEdit(d);
                        //     Navigater("/edit-car-details")
                        // }

                    }} />
            </div>
            <div className="card-2nd">
                <div className="person-nos">6 person</div>
                <div className="car-details">
                    <span>name</span> 
                    <span className="distance-det">per km KM/RS</span>
                </div>
            </div>
            
            <hr/>
            <div className="date-details">
                <span >Available Date</span>
                <span >start - till</span>
            </div>
        </div>
    )
}