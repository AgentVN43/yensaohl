import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Home2 from "./pages/Home/index2";
export default function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/yensao" element={<Home2/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  );
}
