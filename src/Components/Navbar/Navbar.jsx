import React from "react";
import './Navbar.css'
import homeicon from "../Assets/homeicon.png";

import { NavLink} from "react-router-dom";


const Navbar = () => {
    return(
        <>
        <div className="conatiner-fluid row navbar">
        <div className="col-md-1 col-2 ms-2 home" style={{ textAlign: "right" }}>
                <NavLink to="/"><img src={homeicon}></img></NavLink>
        </div>
            <div className="col-md-5 col-10 mb-2 home" style={{ textAlign: "right" }}>
            <span>Masterclass Of FullStack Developer Starts In 12:00:00</span>
            </div>
            <div className="col-md-5 col-12 mb-2" style={{ textAlign: "center" }}>
            <span><NavLink to="/admision"><button>Reserve Your Seat Now</button></NavLink></span>
                <NavLink to="/login"><button>Login</button></NavLink>

            </div>
            
        </div>
        </>
    )
}

export default Navbar;