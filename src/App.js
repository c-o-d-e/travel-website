import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
    return (
        <>
            <Navbar />
            <HashRouter>
                <Routes>
                    <Route path="/services" exact element={<Services />} />
                    <Route path="/products" exact element={<Products />} />
                    <Route path="/sign-up" exact element={<SignUp />} />
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
