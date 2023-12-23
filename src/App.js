import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home2 from "./pages/Home/index2";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Banner/>
        <Routes>
          <Route path="/" element={<Home2 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
