import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import AdminNav from "../../navbar/AdminsNav";
import CarCards from "./CarCards";
import '../../styles/styles.css'
import { StateContextsData } from '../../context/StateContext'
import { GetCars } from "../../utils/ApiUtils";

export default function AdminPage() {
    const AdminId = JSON.parse(localStorage.getItem("Admin-Id"));
    const navigate = useNavigate();
    const TokenAdmin = JSON.parse(localStorage.getItem("token-admin"))
    const [err, setErr] = useState("");
    const [ok, setOk] = useState("");
    const { car, setCar, setEdit } = useContext(StateContextsData);
    useEffect(() => {
        if (!localStorage.getItem("token-admin")) {
            return navigate("/")
        }
        GetCars()
            .then(data => setCar(data.reverse()))
    }, []
    );

    const adminName = JSON.parse(localStorage.getItem("Admin-name"))

    console.log(adminName);

    console.log(car)

    return (
        <div className='admin-container'>
            <AdminNav />
            <div className="admin-page">
                <h1 className="heading-admin">Hello Admin...</h1>
                <div>
                    <div className="admin-header">
                        <h3>Cars</h3>
                        <Link to='/add-car-details'><button className="save-details">Add Cars</button></Link>
                    </div>
                    {car.length === 0 ? <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open>
                        <CircularProgress color="inherit" />
                    </Backdrop> : <>
                        {err && <div id="display-message-on-the-admin-pag-for-the-err">{err} <span
                            onClick={() => {
                                setErr("");
                                setOk("")
                            }} id="button-ok-for-th-delee-things">{ok}</span></div>}

                        <div className="main-container">
                            {
                                car.map((data, i) => {
                                    return (
                                        <div key={i} className="car-container" onClick={() => navigate("/edit-car-page")}>
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

                                            <hr />
                                            <div className="date-details">
                                                <span >Available Date</span>
                                                <span >start - till</span>
                                            </div>
                                        </div>
                                    )
                                })

                            }

                        </div>
                    </>
                    }
                </div>
            </div>

        </div>
    )
}