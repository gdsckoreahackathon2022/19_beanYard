import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import { postApi, getApi } from "../api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/Signup.css';

const LoginForm = () => {
    const [userData, setUserData] = useState({
        userName: "",
        password: "",
    });

    const [auth, setAuth] = useState({
        type: "",
        token: "",
        userName: userData.userName,
        userType: "",
        userSeq: "",
    });

    const [loginErrorMsg, setLoginErrorMsg] = useState("");
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const post = async () => {
            try {
                const res = await axios.post("http://27.96.134.100:8080/login",
                    userData, {
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: "application/json",
                        }
                    }
                )
                console.log('res', res);
                console.log('res.auth', res.headers.authorization);
                await getApi(
                    {
                        userName: userData.userName,
                    },
                    "/api/user"
                )
                .then(({ status, data }) => {
                    if (status === 200) {
                        console.log('getdata', data);
                        setAuth({ 
                            ...auth, 
                            type: "login",
                            token: res.headers.authorization,
                            userName: data.userName,
                            userType: data.userType,
                            userSeq: data.userSeq,
                        });
                        setLoginErrorMsg("Confirmed!");
                    } else {
                        setLoginErrorMsg("Try Again!");
                    }
                })
                .catch((e) => {
                    setLoginErrorMsg("Try Again!");
                    console.log(e);
                });

                authContext.dispatch({
                    ...auth
                });
                
                localStorage.setItem(
                    "loggedInfo",
                    JSON.stringify({ 
                        token: auth.token,
                        userType: auth.userType,
                        userName: auth.userName,
                        userSeq: auth.userSeq,
                    })
                );
                if (auth.token !== "") {
                    navigate("/"); // 로그인 성공 시 Home으로 이동
                }
                // console.log(authContext.state);
            } catch (error) {
                console.log(error);
                setLoginErrorMsg("Try Again!");
            }
        }
        await post();
    };

    return (
        <form className="Login-outer-form" onSubmit={submitHandler}>
            <div className="form-group">
                <div className="form-item">
                    <h5>user ID</h5>
                    <input
                        type="text"
                        name="userName"
                        placeholder=""
                        onChange={
                            (e) => setUserData({ ...userData, userName: e.target.value })
                        }
                        value={userData.userName}
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="form-item">
                    <h5>Password</h5>
                    <input
                        type="password"
                        name="password"
                        placeholder=""
                        onChange={(e) =>
                            setUserData({ ...userData, password: e.target.value })
                        }
                        value={userData.password}
                    />
                </div>
            </div>
            <p className= {loginErrorMsg === "Confirmed!" ? 
                "login-confirm-text" : 
                "login-error-text"}>
                {loginErrorMsg}
            </p>
            <br></br>
            <button
                className="Login-button"
                type="submit"
            >LOG IN</button>
            <br />
        </form>
    );
};

export default LoginForm;
