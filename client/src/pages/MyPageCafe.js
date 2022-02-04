import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import { getApi } from "../api";
import '../styles/MyPageCafe.css';

const MyPageCafe = () => {
    const authContext = useContext(AuthContext);
    // const [cafeName, setCafeName] = useState("CAFE");
    const [totalCoffee, setTotalCoffee] = useState(0);

    useEffect(() => {
        const getCafeProfile = async () => {
            console.log(authContext);
            await getApi(
                { userName: authContext.state.userName },
                `/api/user`,
                authContext.state.token
            )
            .then(({ status, data }) => {
                console.log(data)
                if (status === 200) {
                    setTotalCoffee(data.coffee);
                };
            })
            .catch((e) => {
                console.log(e);
            });
        };
        getCafeProfile();
    }, []);

    return (
        <div className="my-page-cafe">
            {/* <div>
                {cafeName}
            </div> */}
            {/* <div>
                작물 일러스트
            </div> */}
            <div>
                The coffee gourd You've donated so far is
                <span style={{ fontWeight: 'bold' }}> {totalCoffee} </span>
                <span>kg.</span>
            </div>
        </div>
    );
};

export default MyPageCafe;
