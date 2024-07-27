import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header /> {/* //Put navigation for ypur pages here in navigation file */}
      <Outlet /> {/* //This pages will get display here in the main section */}
      <Footer /> {/* //Put footer for ypur pages here */}
    </div>
  );
}

export default App;
