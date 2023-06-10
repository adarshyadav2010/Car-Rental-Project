import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


function AdminRegister() {
    const [inputdata, setInputData] = useState({
        Name: "",
        Email: "",
        Contact: "",
        Password: "",
        Confirm_Password: ""
    });
    const [err, setErr] = useState("");



    const navigate = useNavigate();

    const onSubmitData = async (e) => {
        e.preventDefault();

        const { Name, Email, Contact, Password, Confirm_Password } = inputdata;
        if (Email === "") {
            toast.error("Email is required");
        }
        else if (Name === "") {
            toast.error("Enter Valid Name !")
        }
        else if (!Email.includes("@")) {
            toast.error("Enter Valid Email !")
        }
        else if (Contact.length < 10) {
            toast.error("Enter Valid Phone number!")
        }
        else if (Password === "") {
            toast.error("Password is required")
        }
        else if (Password.length < 4) {
            toast.error("Password is too short")
        }
        else if (Password.length > 20) {
            toast.error("Password is too Long")
        }
        else if (Confirm_Password !== Password) {
            toast.error("Password is not Matching")
        }
        else {
            //   addAdmin(inputdata).then(data=>{
            //     if(data.status==="Failed"){
            //       setErr("User Allready Exists")
            //     }else if(data.status==="Success"){
            //       toast.success("Register Successfully");
            //       setInputData({
            //         Name: "",
            //         Email: "",
            //         Contact: "",
            //         Password: "",
            //         Confirm_Password: ""
            //       })

            //     }

            // })





        }

    }

    return (
        <>
            <div className="form-card" id='form'>

                <form onSubmit={onSubmitData}>
                    <h4 className='sign-up'>Register your Admin Account</h4>
                    <h6 style={{ color: "red" }}>{err}</h6>
                    
                    <input type="text" name="Name" className='input-field' onChange={e => setInputData({ ...inputdata, Name: e.target.value })} value={inputdata.Name} placeholder='Name' />

                    <input type="Email" name="Email" className='input-field' onChange={e => setInputData({ ...inputdata, Email: e.target.value })} value={inputdata.Email} placeholder='Email' />

                    <input type="tel" name="Contact" className='input-field' onChange={e => setInputData({ ...inputdata, Contact: e.target.value })} value={inputdata.Contact} placeholder='Contact' />

                    <input type="Password" className='input-field' onChange={e => setInputData({ ...inputdata, Password: e.target.value })} value={inputdata.Password} placeholder='Password' name='Password' />

                    <input type="Password" className='input-field' onChange={e => setInputData({ ...inputdata, Confirm_Password: e.target.value })} value={inputdata.Confirm_Password} placeholder='Confirm Password' name='Confirm_Password' />

                    <div className="login-signup">
                        <Link to='/admin/login' ><span >Sign In</span></Link>
                        <button type='submit' className="save-details">Register</button>
                    </div>
                </form>
                <ToastContainer
                    position="top-center"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    theme="dark"
                />
            </div>
        </>
    )
}

export default AdminRegister;