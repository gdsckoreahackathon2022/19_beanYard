import React, { useState } from "react";
import { getApi, postApi } from "../api";
import { AuthContext } from "../App";

const SignupFormFarmer = ({ history }) => {
    const [details, setDetails] = useState({
        name: "",
        userName: "",
        password: "",
        phone: "",
        userType: "",
        vegType: "",
    });
    const [signupErrorMsg, setSignupErrorMsg] = useState("");
    const [userNameCheck, setUserNameCheck] = useState("");
    const [isUserNameChecked, setIsUserNameChecked] = useState(false);

    const checkUsername = async (e) => {
        e.preventDefault();
        await getApi(
            {
                userName: details.userName,
            },
            "/api/user"
        )
        .then(({ status, data }) => {
            console.log('status:', status);
            if (status === 204) {
                setUserNameCheck("Available!");
                setIsUserNameChecked(true);
            } else {
                setUserNameCheck("Duplicated ID. Try another.");
                setIsUserNameChecked(false);
            }
        })
        .catch((e) => {
            console.log(e);
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await postApi(details, "/api/user/register")
            .then(({ status, data }) => {
                AuthContext.dispatch({
                    type: "login",
                    token: data.token,
                    userName: details.userName,
                    userSeq: data.userSeq,
                    userType: data.userType,
                });
                
                // history.pushState("/login"); // 성공 시 login 으로 이동
            })
            .catch((e) => {
                console.log("Signup Failed")
            })
    }
    return (
        <form className="Signup-outer-form" onSubmit={submitHandler}>
            <div className="form-group">
                <h5>Cafe Name</h5>
                <input
                    type="text"
                    name="name"
                    placeholder=""
                    onChange={(e) =>
                        setDetails({ ...details, userName: e.target.value })
                    }
                    value={details.userName}
                />
            </div>
            <div className="form-group">
                <h5>User ID</h5>
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
            <button
                    onClick={checkUsername}
                >Check</button>
                <p>{userNameCheck}</p>
            <div className="form-group">
                <h5>Password</h5>
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
                <h5>Phone</h5>
                <input
                    name="phone"
                    placeholder=""
                    onChange={(e) =>
                        setDetails({ ...details, phone: e.target.value })
                    }
                    value={details.phone}
                />
            </div>

            <p>{signupErrorMsg}</p>
            <br></br>
            <button 
                type="submit"
                disabled={!isUserNameChecked}
            >Sign Up</button>
        </form>
    );
};

export default SignupFormFarmer;
