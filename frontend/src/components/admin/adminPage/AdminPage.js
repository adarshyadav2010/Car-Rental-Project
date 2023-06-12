import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import AdminNav from "../../navbar/AdminsNav";
import CarCards from "./CarCards";
import '../../styles/styles.css'
import {StateContextsData} from '../../context/StateContext'

export default function AdminPage(){
    const {cars, setCars} = useContext(StateContextsData)
    return(
        <div className='admin-container'>
            <AdminNav/>
            <div className="admin-page">
                <h1 className="heading-admin">Hello Admin...</h1>
                <div>
                    <div className="admin-header">
                        <h3>Cars</h3>
                        <Link to='/add-car-details'><button className="save-details">Add Cars</button></Link>
                    </div>
                    

                    <div className="main-container">
                        {/* {
                            cars.map((data, i)=>{
                                return(
                                    <CarCards car={data}/>
                                )
                            })
                            
                        } */}
                        <CarCards/>
                        <CarCards/>
                        <CarCards/>
                        <CarCards/>
                        <CarCards/>
                        <CarCards/>
                        <CarCards/>
                        <CarCards/>
                        <CarCards/>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}