import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import { postApi } from "../api";


const LoginForm = ({ history }) => {
    const [details, setDetails] = useState({
        userType: "",
        userName: "", 
        password: "",
    });
    const [userNameCheck, setUserNameCheck] = useState("");
    const [isUserNameChecked, setIsUserNameChecked] = useState(false);
    const [userCF, setUserCF] = useState("");

    const authContext = useContext(AuthContext);

    const checkUsername = async (e) => {
        e.preventDefault();

        await postApi(details.userName, "/check/username")
            .then(({ status, data }) => {
                if (status === 200){
                    setUserNameCheck("사용 가능한 아이디입니다.");
                    setIsUserNameChecked(true);
                } else {
                    setUserNameCheck("중복된 아이디입니다.");
                    setIsUserNameChecked(false);
                }
            })
            .catch((e) => {
                
                console.log(e.response);
            });
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        await postApi(details.userName, "/check/userType")
            .then(({ status, data }) => {
                setUserCF(data.userType);
            })
            .catch((e) => {
                console.log(e.response);
            });

        await postApi(details, "/login")
            .then(({ status, data }) => {
                authContext.dispatch({
                    type: "login",
                    token: data.token,
                    userName: details.userName,
                    userType: userCF,
                });
                history.push("/"); // 성공 시 home으로 이동
            })
            .catch((e) => {
                console.log(e.response);
            });
    };

    return (
        <form className="Login-outer-form" onSubmit={submitHandler}>
            <div className="Login-form-header">
            </div>
            <div className="form-group">
                <h5>ID</h5>
                <input
                    type="text"
                    name="userName"
                    placeholder=""
                    onChange={
                        (e) => setDetails({ ...details, userName: e.target.value })
                    }
                    value={details.userName}
                />
                <button
                    onClick={checkUsername}
                >중복확인</button>
                <p>{userNameCheck}</p>
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
            
            <br></br>
            <button 
                type="submit"
                disabled={!isUserNameChecked}
            >LOG IN</button>
            <br />
        </form>
    );
};

export default LoginForm;
