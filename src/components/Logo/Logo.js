import React from "react";
import logo from "./logo.svg";
import "./Logo.css"


const Logo = () => {
  return (
    <div>
      <img className="logo" id="logo" height="125px" 
        src={logo} alt="VidFlix Logo" />
    </div>
  )
}

export default Logo;
