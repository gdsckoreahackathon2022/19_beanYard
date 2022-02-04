import React, { useContext } from "react";
import { AuthContext } from "../App";
import { SignupFormCafe, SignupFormFarmer } from "../components";

const Signup = (props) => {
    const authContext = useContext(AuthContext);
    console.log(props)
    console.log(props.page)
    return (
        <div>
            <h2>Join us!</h2>
            <p>Fill out the form and...</p>
            {props.page === 'cafe' ? (
                <div>
                    <SignupFormCafe />
                </div>
            ) : (
                <div>
                    <SignupFormFarmer />
                </div>
            )}
        </div>
    );
};

export default Signup;
