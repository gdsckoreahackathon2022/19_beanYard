import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import { getApi } from "../api";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    // const [loginErrorMsg, setLoginErrorMsg] = useState("");
    // const submitHandler = async (e) => {
    //     e.preventDefault();

    //     const post = async () => {
    //         try {
    //             const res = await axios.post("http://27.96.134.100:8080/login",
    //                 userData, {
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         Accept: "application/json",
    //                     }
    //                 }
    //             )
    //             // console.log(res);
    //             // console.log(res.headers.authorization);
    //             await getApi(
    //                 {
    //                     userName: userData.userName,
    //                 },
    //                 "/api/user"
    //             )
    //             .then(({ status, data }) => {
    //                 if (status === 200) {
    //                     // console.log('getdata', data);
    //                     setAuth({ 
    //                         ...auth, 
    //                         type: "login",
    //                         token: res.headers.authorization,
    //                         userName: data.userName,
    //                         userType: data.userType,
    //                         userSeq: data.userSeq,
    //                     })
    //                 } else if (status === 401) {
    //                     setLoginErrorMsg("Try Again!");
    //                 }
    //             })
    //             .catch((e) => {
    //                 setLoginErrorMsg("Try Again!");
    //                 console.log(e);
    //             });

    //             authContext.dispatch({
    //                 ...auth
    //             });
    //             if (auth.token !== "") {
    //                 navigate("/"); // 로그인 성공 시 Home으로 이동
    //             }
    //             // console.log(authContext.state);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     await post();
    // };
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const getLogout = async () => {
            await getApi({}, "/api/user/logout")
            .then(({ status, data }) => {
                console.log('status:', status);
                if(status === 200 || status === 201 || status === 204) {
                    navigate('/');
                    authContext.dispatch({
                        type: "logout",
                        token: null,
                        userName: null,
                        userType: null,
                        userSeq: null,
                    });
                    alert('로그아웃 되었습니다.');
                } else {
                    alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
                }
            })
            .catch((e) => {
                console.log(e);
            });
        };

        getLogout();

    }, [authContext, navigate]);

    return (
        <div></div>
    );
};

export default Logout;
