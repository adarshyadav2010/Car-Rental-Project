import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import UserRegister from './UserRegister';

function UserLogin() {
    const [inputdata, setInputData] = useState({
        Email: "",
        Password: ""
    });

    const handleEmailChange = (e) => {
        setInputData({ ...inputdata, Email: e.target.value });
    }

    const handlePasswordChange = (e) => {
        setInputData({ ...inputdata, Password: e.target.value });
    }

    const navigate = useNavigate();
    const [error, setError] = useState("");
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
            <div className="form-card" id='form'>

                <form action="post">
                    <h4 className='sign-up'>User Login</h4>
                    <h6 style={{ color: "red" }}>{error}</h6>
                    <input type="Email" name="Email" onChange={handleEmailChange} placeholder='Email' className='input-field'/>

                    <input type="Password" onChange={handlePasswordChange} placeholder='Password' className='input-field'/>
                    <div className="login-signup">
                        {/* <a href={'#type'}><span>Create Account</span></a> */}
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
                    theme="dark"
                />
            </div>
        </>
    )
}


export default UserLogin