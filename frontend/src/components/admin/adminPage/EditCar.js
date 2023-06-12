import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AdminNav from "../../navbar/AdminsNav"
import { StateContextsData } from "../../context/StateContext"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import '../../styles/styles.css'


export default function EditCar() {
    const {setCars,edit,setEdit,cars } = useContext(StateContextsData);
    const [file , setFile] = useState("");
    const navigate = useNavigate();

    function onSubmitEdit(e){
        e.preventDefault()
    }
    return (
        <div className='addcar-container'>
            <AdminNav />
                <div className="addcar-page">
                    <h4 className="heading-admin">Edit Car Details</h4>
                    <form id="add-car-form" onSubmit={onSubmitEdit}>
                    <div className="form-main">
            <div id="form-left">
                <div>
                    <label>Car Name</label><br />
                    <input className="form-input" type="text" placeholder="Name" name="name" onChange={(e) => setEdit({ ...edit, name: e.target.value })} value={edit.name} />
                </div>
                <div className="data-form-flex input-gap-bottom" >
                    <div>
                        <label>Type</label><br />
                        <select className="select-things" name="type" onChange={(e) => setEdit({ ...edit, type: e.target.value })} value={edit.type}>
                            <option>select</option>
                            <option>UV</option>
                            <option>XUV</option>
                            <option>SUV</option>
                            <option>Sedan</option>
                            <option>Hatch-Back</option>
                        </select>
                    </div>

                    <div>
                        <div>
                            <label>Model</label><br />
                            <input type="text" placeholder="Model" className="select-things" name="model" onChange={(e) => setEdit({ ...edit, model: e.target.value })} value={edit.model} />
                        </div>

                    </div>


                </div>
                <div className="data-form-flex input-gap-bottom">
                    <div>
                        <label>Milage</label><br />
                        <select className="select-things" name="milage" onChange={(e) => setEdit({ ...edit, milage: e.target.value })} value={edit.milage}>
                            <option>Select</option>
                            <option>20Km/L</option>
                            <option>14Km/L</option>
                            <option>15Km/L</option>
                            <option>18Km/L</option>
                            <option>10Km/L</option>
                        </select>
                    </div>

                    <div>
                        <label>Per KM</label><br />
                        <input type="number" placeholder="000000" id="per-km" name="perKm" onChange={(e) => setEdit({ ...edit, perKm: e.target.value })} value={edit.perKm} />
                    </div>
                </div>

                <div className="data-form-flex input-gap-bottom">
                    <div>
                        <label>Available From</label><br />
                        <input type="date" className="date-input" name="availableFrom" onChange={(e) => setEdit({ ...edit, availableFrom: e.target.value })} value={edit.availableFrom} />
                    </div>

                    <div>
                        <label>Available Till</label><br />
                        <input type="date" className="date-input" name="availableTill" onChange={(e) => setEdit({ ...edit, availableTill: e.target.value })} value={edit.availableTill} />
                    </div>
                </div>

                <div className="input-gap-bottom">
                    <label>Description</label><br />
                    <textarea id="text-area-description" placeholder="Description" name="description" onChange={(e) => setEdit({ ...edit, description: e.target.value })} value={edit.description}></textarea>
                </div>

            </div>

            <div id="form-right">
                <div id="image-add-in-add-user-form">
                    <input type="file" name="image" onChange={(e) => {
                        setFile(URL.createObjectURL(e.target.files[0]));
                        setEdit({ ...edit, image: e.target.files[0] })
                    }}
                    ></input>
                </div>

                {file ? <div id="imgs-add-car-container">

                    <div className="img-sort-box">
                        <img src={file} id="preview-img-of-the-file" ></img>
                    </div>

                </div> : null}

                <div>
                    <label>Car Details</label><br />
                    <textarea className="car-detail-description" name="carDetails" placeholder="Add Car Details.." onChange={(e) => setEdit({ ...edit, carDetails: e.target.value })} value={edit.carDetails}></textarea>
                </div>
                <div>
                    <label>Details</label><br />
                    <textarea className="car-detail-description" name="Details" placeholder="Add Details" onChange={(e) => setEdit({ ...edit, Details: e.target.value })} value={edit.Details}></textarea>
                </div>
            </div>
        </div>
        <div className="input-gap-bottom " id="btn-cancel-add-detail-container">
             <button id="btn-cancel-add-detail" onClick={()=>navigate("/admin-page")} >Cancel</button>
             <button className="btn-Add-add-detail-ans-save" id="delete-btn-for-edit-page" onClick={()=>{}}>Delete</button>
             <button className="btn-Add-add-detail-ans-save save-btn-details" >save</button>
        </div>
                    </form>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </div>
        </div>
    )
}
