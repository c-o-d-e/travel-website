import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/travel-website/services" element={<Services />} />
                <Route path="/travel-website/products" element={<Products />} />
                <Route path="/travel-website/sign-up" element={<SignUp />} />
                <Route path="/travel-website/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
