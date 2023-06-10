import React from "react";
import AdminNav from "../../navbar/AdminsNav";

export default function AdminPage(){
    return(
        <div className='home-container'>
            <AdminNav/>
            <div className="admin-page">
                <h1 className="heading-admin">Hello Admin...</h1>
            </div>
        </div>
    )
}