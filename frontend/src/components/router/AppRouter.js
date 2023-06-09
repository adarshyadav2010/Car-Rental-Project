import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../homePage/HomePage";



export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
        </Routes>

    </BrowserRouter>
}