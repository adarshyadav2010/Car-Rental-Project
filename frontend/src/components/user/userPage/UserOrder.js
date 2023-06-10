import React from "react";
import UserNav from "../../navbar/UserNav";
import { useNavigate } from 'react-router-dom';
import UserHeader from "./UserHeader";

export default function () {
    return (
        <div className='home-container'>
            <UserNav />
            <br />
            <UserHeader />
            <br />
            <div className='header-cls'>
                
            </div>
        </div>
    )
}
