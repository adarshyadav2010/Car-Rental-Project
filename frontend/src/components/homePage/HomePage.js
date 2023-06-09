import React, {useState} from "react";
import { Link } from 'react-router-dom';
import HomeNav from "../navbar/HomeNav";
import UserRegister from "../user/UserRegister";
import UserLogin from "../user/UserLogin";
import AdminRegister from "../admin/AdminRegister";
import AdminLogin from "../admin/AdminLogin";


export default function HomePage(){
    const [formType, setFormType]  = useState('Rent a car');
    
    return (
        <div className='home-container'>
            <HomeNav/>
            <div className="page-design">
                <div className="page-content">
                    <h2>Rent a Ride !!! Roam awide <br/>
                        Enjoy your holidays with our wheels<br/>
                        Make your journey Enjoyable
                    </h2>
                    <div className="click-control">
                        <div className="controls">
                            <span>User: </span>
                            <div>
                                {/* <button className="save-details">Register</button> */}
                                <button className="save-details" onClick={()=>{setFormType(<UserLogin/>)}}>Login</button>
                                <button className="save-details" onClick={()=>{setFormType(<UserRegister/>)}}>Register</button>
                            </div>
                            
                        </div>
                        <div className="controls">
                            <span>Admin: </span>
                            <div>
                                {/* <button className="save-details">Register</button> */}
                                <button className="save-details" onClick={()=>{setFormType(<AdminLogin/>)}}>Login</button>
                                <button className="save-details" onClick={()=>{setFormType(<AdminRegister/>)}}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-div">
                    {formType}
                </div>
                
                
            </div>
        </div>
    )
}

{/* <UserLogin/> */}
                        {/* <AdminRegister/> */}
                        {/* <AdminLogin/> */}
                        {/* {formType} */}
                        {/* <FormType form={formType}/> */}