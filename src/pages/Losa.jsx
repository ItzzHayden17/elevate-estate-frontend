import "./styles/losa.css"
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Lora(){

    const [buyer, setBuyer] = useState(true);
    const [signup, setSignup] = useState(true);
  
    function handleBuyer(e) {
      e.preventDefault();
      if (buyer === true) {
        setBuyer(false);
      } else {
        setBuyer(true);
      }
    }
    function handleSignup(e) {
      e.preventDefault();
      if (signup === true) {
        setSignup(false);
      } else {
        setSignup(true);
      }
    }

    return(
      <div>
        <Navbar />
        <div className="SOL">
            
      <div className="Form">
        {signup ? (
          <div>
            <div className="Header brittany">
              <h1>Sign Up</h1>
              <button onClick={handleSignup}>or login</button>
            </div>
            <motion.div initial={{ x: -100 }} animate={{ x: 1 }}>
              <div>
                <form method="POST" action="https://elevate-estate-backend-1.onrender.com/signup" className="input-section" encType="multipart/form-data">
                  <input name="name" placeholder="Name"></input>
                  <input name="surname" placeholder="Surname"></input>
                  <input name="email" placeholder="Email"></input>
                  <input name="password" placeholder="Password"></input>
                  <div className="aorb">
                    <p>Agent</p>
                    <button onClick={handleBuyer}>
                      {buyer ? <p>→</p> : <p>←</p>}
                    </button>
                    <p>Buyer</p>
                  </div>
                  {buyer ? (
                    <div></div>
                  ) : (
                    <motion.div initial={{ y: -20 }} animate={{ y: 1 }}>
                      <div className="input-section">
                        <input 
                          type="file"
                          name="image"
                          placeholder="Choose profile picture"
                          required
                        ></input>
                        <input
                          name="number"
                          placeholder="Mobile number"
                        ></input>
                        <textarea
                          name="description"
                          placeholder="Describe yourself"
                        ></textarea>
                        <input
                          name="years_of_experience"
                          placeholder="Years of experience"
                        ></input>
                        <input
                          name="company"
                          placeholder="Company"
                        ></input>
                      </div>
                    </motion.div>
                  )}
                  <button className="submit">Sign up</button>
                </form>
              </div>
            </motion.div>
          </div>
        ) : (
          <div>
            <div className="Header brittany">
              <h1>Login</h1>
              <button onClick={handleSignup}>or sign up</button>
            </div>
            <div>
              <motion.div initial={{ x: -100 }} animate={{ x: 1 }}>
                <form method="POST" action="https://elevate-estate-backend-1.onrender.com/login" className="input-section" >
                  <input name="email" placeholder="Email"></input>
                  <input name="password" placeholder="Password"></input>

                  <button className="submit">Log in</button>
                </form>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    )
}
