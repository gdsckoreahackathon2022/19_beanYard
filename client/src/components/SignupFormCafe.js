import React, { useState } from "react";
import { postApi } from "../api";
import { AuthContext } from "../App";

const SignupFormCafe = ({ history }) => {
    const [details, setDetails] = useState({
        userName: "",
        password: "",
        phone: "",
        farm: "",
        plant: "",
    });
    const [signupErrorMsg, setSignupErrorMsg] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        await postApi(details, "/api/user/register")
            .then(({ status, data }) => {
                AuthContext.dispatch({
                    type: "CafeLogin",
                    token: data.token,
                    userName: details.userName,
                    cf: 'c',
                });
                
                history.pushState("/login"); // ���� �� login ���� �̵�
            })
            .catch((e) => {
                console.log("Signup Failed")
                setSignupErrorMsg("Signup Failed") 
            })
    }
    return (
        <form className="Signup-outer-form" onSubmit={submitHandler}>
            
            <div className="form-group">
                <h5>ID</h5>
                <input
                    type="text"
                    name="userName"
                    placeholder=""
                    onChange={(e) =>
                        setDetails({ ...details, userName: e.target.value })
                    }
                    value={details.userName}
                />
            </div>
            <div className="form-group">
                <h5>PASSWORD</h5>
                <input
                    type="password"
                    name="password"
                    placeholder=""
                    onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                    }
                    value={details.password}
                />
            </div>
            <div className="form-group">
                <h5>PHONE NUMBER</h5>
                <input
                    name="phone"
                    placeholder=""
                    onChange={(e) =>
                        setDetails({ ...details, phone: e.target.value })
                    }
                    value={details.phone}
                />
            </div>
            <div className="form-group">
                <h5>FARM LOCATION</h5>
                
            </div>
            <div className="form-group">
                <h5>What is your Plant?</h5>
                <input
                    name="plant"
                    placeholder="Plant"
                    onChange={(e) =>
                        setDetails({ ...details, plant: e.target.value })
                    }
                    value={details.plant}
                />
            </div>

            <p>{signupErrorMsg}</p>
            <br></br>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupFormCafe;
