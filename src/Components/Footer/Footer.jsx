import React from "react";
import './Footer.css';

import { NavLink,Link } from "react-router-dom";

import intro from "../Assets/intro.mp4";

import payment1 from "../Assets/payment_01.png";
import payment2 from "../Assets/payment_02.png";
import payment3 from "../Assets/payment_03.png";
import payment4 from "../Assets/payment_04.png";
import payment5 from "../Assets/payment_05.jpg";



const Footer = () => {
    return(
        <>
        <div className="conatiner-fluid row footer">
            <div className="col-md-12">
                <h1>What People Say About My System</h1>
                </div>

                
                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    
                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>

                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>

                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-10 col-md-3 ms-5">
                    <video src={intro} autoPlay loop muted/>
                    </div>

                     <div className="container-fluid row">
                    <div className="col-1 col-md-1"></div>
            <div className="col-10 col-md-10 admision ">
            <NavLink to="/admision"><button><span>Register Now For Just ₹97/-</span><br/>
            <p>Actuall Price <del>₹599/-</del></p></button></NavLink>
            </div>
            <div className="col-1 col-md-1"></div>
            </div>
                

                <div className="conatiner-fluid row mt-5 my-5">
            <div className="col-md-1"></div>  
            <div className="col-md-10 mt-5" style={{ textAlign: "center" }}>
                <div className="row payment">
                  <div className="col-1 col-md-1">
                  </div>
                  <div className="col-12 col-md-2">
                  <img src={payment1}/>
                  </div>
                  <div className="col-12 col-md-2">
                  <img src={payment2}/>
                  </div>
                  <div className="col-12 col-md-2">
                  <img src={payment3}/>
                  </div>
                  <div className="col-12 col-md-2">
                  <img src={payment4}/>
                  </div>
                  <div className="col-12 col-md-2">
                  <img src={payment5}/>
                  </div>
                  <div className="col-1 col-md-1">
                  </div>
                </div>
                <br></br>
                <p style={{fontWeight:"bold" , fontSize:"22px", color:"white"}}>Price Goes Up Soon To ₹599</p>
            </div>
            <div className="col-md-1"></div>
        </div>

        </div>
        </>
    )
}

export default Footer;