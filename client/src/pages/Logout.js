import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import { getApi } from "../api";
import { useNavigate } from "react-router-dom";

const Logout = () => {
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
