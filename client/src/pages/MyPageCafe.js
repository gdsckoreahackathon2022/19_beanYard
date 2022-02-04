import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import { getApi } from "../api";

const MyPageCafe = () => {

    const authContext = useContext(AuthContext);
    const [cafeName, setCafeName] = useState("");
    const [totalCoffee, setTotalCoffee] = useState(0);

    useEffect(() => {
        const getCafeProfile = async () => {
            await getApi(
                {
                    userName: authContext.state.userName,
                },
                "/mypage/cafe",
                authContext.state.token
            )
            .then(({ status, data }) => {
                if (status === 200) {
                    setCafeName(data.cafeName);
                    setTotalCoffee(data.totalCoffee);
                };
            })
            .catch((e) => {
                console.log(e);
            });
        };
        // getCafeProfile();
    }, []);

    return (
        <div>
            <div>
                {cafeName}
            </div>
            <div>
                작물 일러스트
            </div>
            <div>
                지금까지 기부한 커피박은 {totalCoffee} kg 입니다.
            </div>
        </div>
    );
};

export default MyPageCafe;
