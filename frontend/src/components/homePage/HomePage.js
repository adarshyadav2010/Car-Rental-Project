import React from "react";
import { Link } from 'react-router-dom';
import HomeNav from "../navbar/HomeNav";
import UserRegister from "../user/UserRegister";
import UserLogin from "../user/UserLogin";


export default function HomePage(){
    return (
        <div className='home-container'>
            <HomeNav/>
            <div className="page-design">
                <div className="page-content">
                    <h3>Rent a Ride !!! Roam awide <br/>
                        Enjoy your holidays with our wheels<br/>
                        Make your journey Enjoyable
                    </h3>
                    <div className="click-control">
                        <div className="controls">
                            
                            <div>
                                <span>User: </span>
                                {/* <button className="save-details">Register</button> */}
                                <button className="save-details">Login</button>
                            </div>
                            
                        </div>
                        <div className="controls">
                            
                            <div>
                                <span>Admin: </span>
                                {/* <button className="save-details">Register</button> */}
                                <button className="save-details">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-div'> 
                    {/* <UserRegister/> */}
                    <UserLogin/>
                </div>
            </div>
        </div>
    )
}