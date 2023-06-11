import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AdminNav from "../../navbar/AdminsNav"

export default function AddCar(){
    return(
        <div className='admin-container'>
            <AdminNav/>
            <div className="admin-page">

            </div>
        </div>
    )
}
