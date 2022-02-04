import React from "react";
import { SignupFormCafe } from "../components";
import '../styles/Signup.css';

const SignupCafe = () => {
    
    return (
        <div className="Signup">
            <div className="Signup-title">
                <h2>Join us!</h2>
                <p>Fill out the form and...</p>
            </div>
            <SignupFormCafe />
        </div>
    );
};

export default SignupCafe;
