import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="/travel-website/"
                    element={<Navigate to="/travel-website/home" />}
                />
                <Route path="/travel-website/home" exact element={<Home />} />
                <Route path="/travel-website/services" element={<Services />} />
                <Route path="/travel-website/products" element={<Products />} />
                <Route path="/travel-website/sign-up" element={<SignUp />} />
            </Routes>
        </>
    );
}

export default App;
