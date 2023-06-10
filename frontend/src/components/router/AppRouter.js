import React from "react";
import { BrowserRouter, Routes,Route, Switch, Link, Outlet } from 'react-router-dom';
import HomePage from "../homePage/HomePage";
import AdminRegister from "../admin/AdminRegister";
import AdminLogin from "../admin/AdminLogin";
import UserRegister from "../user/UserRegister";
import UserLogin from "../user/UserLogin";
import HomeCard from "../homePage/HomeCard";



export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/" element={<HomeCard/>}/>
            {/* <Outlet /> */}
            </Route>
            <Route path="user" element={<HomePage/>}>
                <Route path="login" element={<UserLogin />} />
                <Route path="register" element={<UserRegister />} />
            </Route>
            <Route path="admin" element={<HomePage/>}>
                <Route path="login" element={<AdminLogin/>} />
                <Route path="register" element={<AdminRegister/>} />
            </Route>
        </Routes>
        

    </BrowserRouter>
}