import React from "react";
import "./Banner.css";
import { NavLink,Link } from "react-router-dom";



import intro from "../Assets/intro.mp4";
import Featured1 from "../Assets/Featured_01.png";
import Featured2 from "../Assets/Featured_02.jpg";
import Featured3 from "../Assets/Featured_03.jpg";
import Featured4 from "../Assets/Featured_04.png";
import Featured5 from "../Assets/Featured_05.png";

import payment1 from "../Assets/payment_01.png";
import payment2 from "../Assets/payment_02.png";
import payment3 from "../Assets/payment_03.png";
import payment4 from "../Assets/payment_04.png";
import payment5 from "../Assets/payment_05.jpg";

import arunsingh from "../Assets/arunsingh.jpg";
import teacher1 from "../Assets/teacher_01.jpg";
import teacher2 from "../Assets/teacher_02.jpg";
import teacher3 from "../Assets/teacher_03.jpg";




const Hero = () => {
    return(<>
        <div className="conatiner-fluid row hero mb-5">
            <div className="col-md-12 mt-5" style={{ textAlign: "center" }}>

                

                <span>Learn/Discover Full Stack Development/ <br/> How Websites Are 
                    Made And Work Using Codes <br/> & How You Can get The Same Result </span>

                 <br/>
                 <br/>
                    <p>Learn Full Stack Development, with us & Go From Zero To<br/>
                         Hero in just 7 months</p>
            
            </div>
        </div>

        <div className="conatiner-fluid row">
            <div className="col-3 col-md-3">
            </div> 
            <div className="col-6 col-md-6 intro">
                <NavLink to="/admision"><video src={intro} autoPlay loop muted/></NavLink>
            </div> 
            <div className="col-3 col-md-3">
            </div>    
        </div>

        <div className="conatiner-fluid row my-5">
            <div className="col-1 col-md-1"></div>  
            <div className=" col-10 col-md-10 mt-5 featured"style={{ textAlign: "center" }}>
                <span>Featured on</span>

                <div className="row my-3">
                  <div className="col-md-1">
                  </div>
                  <div className="col-12 col-md-2">
                  <img src={Featured1}/>
                  </div>
                  <div className="col-12 col-md-2">
                  <img src={Featured2}/>
                  </div>
                  <div className="col-12 col-md-2">
                  <img src={Featured3}/>
                  </div>
                  <div className="col-12 col-md-2">
                  <img src={Featured4}/>
                  </div>
                  <div className=" col-12 col-md-2">
                  <img src={Featured5}/>
                  </div>
                  <div className="col-md-1">
                  </div>
                </div>
            </div>
            <div className="col-1 col-md-1"></div>
        </div>

        <div className="container-fluid row">
            <div className="col-1 col-md-1"></div>
            <div className="col-10 col-md-10">
                <div className="row">
                <div className="col-12 col-md-3 achivement mt-4">
                    By <span>Arun Singh</span><br/>
                    Multiple National Award 
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 achivement my-4">
                    <span>2 Lakhs+ </span><br/>
                    Students Trained
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 achivement mt-4">
                    <span>12+ Years</span><br/>
                    Of Experience
                </div>
                <div className="col-md-1"></div>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="container-fluid row admision mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <NavLink to="/admision"><button><span>Register Now For Just ₹97/-</span><br/>
            <p>Actuall Price <del>₹599/-</del></p></button></NavLink>
            </div>
            <div className="col-md-1"></div>
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
                <p style={{fontWeight:"bold" , fontSize:"22px"}}>Price Goes Up Soon To ₹599</p>
            </div>
            <div className="col-md-1"></div>
        </div>


        <div className="conatiner-fluid row teacher1">
            <div className="col-md-12 teacher1" style={{ textAlign: "center", }}>

                
<br/>
<br/>
<br/>
                <span>Learn Full Stack Development From<br/>
                A Multiple Award Winner</span>

                <div className="row my-4 ">
                    <div className="col-1 col-md-1"></div>
                    <div className="col-12 col-md-3 teacher mt-3">
                    <img src={teacher1}/>
                    </div>
                    <div className="col-12 col-md-3 teacher my-3">
                    <img src={teacher2}/>
                    </div>
                    <div className="col-12 col-md-3 teacher mt-3">
                    <img src={teacher3}/>
                    </div>
                    <div className="col-1 col-md-1"></div>
                </div>

                <NavLink to="/admision"><button>Yes,Reserve My Spot Now Just For ₹97</button></NavLink>

                 
            
            </div>
        </div>

        <div className="container-fluid row my-5">
        <div className="col-1 col-md-1"></div>
            <div className="col-10 col-md-5 info">
                <h1>Know Your Coach<br/><span>Arun Singh</span></h1>
                <p>Arun Singh has clearly established himself as an Authority on frontend
                    and backend,for which he also
                </p>

                <span>(Awards,Achivement)</span>

                <p>and featured in top Publications in last few years.Arun singh talks about
                    development which no one talks about.<br/>
                    He has given hits after hits in his work on Frontend,Backend and Database
                </p>

                <span>Helping 200,000+ people</span>

                <p>Get (specific results) through his seminars and <br/>
                events,<br/>
                    Arun Singh is well known figure in software develpoment
                </p>
                
            </div>
            <div className="col-12 col-md-5 mt-5 profile ">
            <img src={arunsingh}/><br/>
            <span><button>Feature on<br/>
            <img src={Featured3}/>
            <img src={Featured3}/>
            <img src={Featured3}/>
            <img src={Featured3}/>
            <img src={Featured3}/>
                </button></span>
            </div>
            <div className="col-md-1"></div>
        </div>


        <div className="container-fluid row">
                    <div className="col-1 col-md-1"></div>
                    <div className="col-12 col-md-3 teacher2 ms-5 mt-5">
                    <img src={teacher1}/>
                    </div>
                    <div className="col-12 col-md-3 teacher2 ms-5 mt-5">
                    <img src={teacher2}/>
                    </div>
                    <div className="col-12 col-md-3 teacher2 ms-5 mt-5">
                    <img src={teacher3}/>
                    </div>
                    <div className="col-1 col-md-2"></div>

                    <div className="col-1 col-md-1"></div>

                    <div className="col-10 col-md-9 teacherb">
                    <NavLink to="/admision"><button>Reserve My Seat Now Just For ₹97</button></NavLink>
                        </div>

                        <div className="col-1 col-md-1"></div>

                    
                </div>

                <div className="conatiner-fluid row">
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
                </div>
                </div>

                <div className="container-fluid row result my-5">
                    <div className="col-md-12">
                        <h1>Still Not Sure?</h1>

                        <h5>See These Result Generated By Our Students</h5>
                        <p>(Some Of These Were Doing For The First Time)</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-3">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-12 col-md-3">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-12 col-md-3">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-md-2"></div>

                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-3">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-12 col-md-3">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-12 col-md-3">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-md-2"></div>

                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-3">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-12 col-md-3">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-12 col-md-3">
                    <video src={intro} autoPlay loop muted/>
                    </div>
                    <div className="col-md-2"></div>

                    <div className="col-2"></div>
                    <div className="col-8 mt-5 ">
                    <NavLink to="/admision"><button>Yes, I Want This Course Of Full Stack Development Now</button></NavLink>
                    </div>
                    <div className="col-2"></div>
                    
                    

                </div>
                





        </>
        
        
        
    )
}

export default Hero;