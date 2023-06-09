import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function AdminLogin() {

    const Navigate = useNavigate();
    const [inputdata, setInputData] = useState({
        Email: "",
        Password: ""
    });

    const handleEmailChange = (e) => {
        setError("")
        setInputData({ ...inputdata, Email: e.target.value });
    }

    const handlePasswordChange = (e) => {
        setError("")
        setInputData({ ...inputdata, Password: e.target.value });
    }
    const [error, setError] = useState("")

    // const Navigate = useNavigate();

    const onSubmitData = async (e) => {
        e.preventDefault();
        // console.log(inputdata);
        const { Email, Password } = inputdata;


        if (Email === "") {
            toast.error("Email is required");
        }
        else if (!Email.includes("@")) {
            toast.error("Enter Valid Email !")
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
        else {

        }
    }

    return (
        <>
            <div className="form-card" id='form' >
                <form action="post" onSubmit={onSubmitData}>
                    <h4 className='sign-up'>Admin Login</h4><br></br>
                    <h6 style={{ color: "red" }}>{error}</h6>
                    <input type="Email" name="Email" onChange={handleEmailChange} placeholder='Email' className='input-field' />

                    <input type="Password" onChange={handlePasswordChange} placeholder='Password' className='input-field' />

                    <div className="login-signup">
                        {/* <button>Create Account</button> */}
                        <button type='submit' onClick={onSubmitData} className="save-details">Sign In</button>
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
                    theme="light"
                />
            </div>
        </>
    )
}


export default AdminLogin