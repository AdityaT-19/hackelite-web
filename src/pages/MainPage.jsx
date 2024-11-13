import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../components/About";
import Domains from "../components/Domains";
import FAQ from "../components/Faq";
import Home from "../components/Home";
import Sponsors from "../components/Sponsors";
import Teams from "../components/Teams";
import Timeline from "../components/Timeline";

function MainPage() {
  return (
    <div>
        <Router>
                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/domains" element={<Domains/>} /> 
                    <Route path="/faq" element={<FAQ/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/sponsors" element={<Sponsors/>} />
                    <Route path="/teams" element={<Teams/>} />
                    <Route path="/timeline" element={<Timeline/>} />
                </Routes>
        </Router>
    </div>
  );
}

export default MainPage;