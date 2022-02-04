import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import { postApi, getApi } from "../api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
                console.log(res);
                console.log(res.headers.authorization);
                await getApi(
                    {
                        userName: userData.userName,
                    },
                    "/api/user"
                )
                .then(({ status, data }) => {
                    console.log('status:', status);
                    if (status === 200) {
                        console.log('getdata', data);
                        setAuth({ 
                            ...auth, 
                            type: "login",
                            token: res.headers.authorization,
                            userName: data.userName,
                            userType: data.userType,
                            userSeq: data.userSeq,
                        })
                    } 
                })
                .catch((e) => {
                    console.log(e);
                });

                authContext.dispatch({
                    ...auth
                });
                console.log('auth', auth);
                if (auth.token !== "") {
                    navigate("/"); // 로그인 성공 시 Home으로 이동
                }
                console.log(authContext.state);
            } catch (error) {
                console.log(error);
            }
        }
        await post();
    };

    

    return (
        <form className="Login-outer-form" onSubmit={submitHandler}>
            <div className="Login-form-header">
            </div>
            <div className="form-group">
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
            <div className="form-group">
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

            <br></br>
            <button
                type="submit"
            >LOG IN</button>
            <br />
        </form>
    );
};

export default LoginForm;
