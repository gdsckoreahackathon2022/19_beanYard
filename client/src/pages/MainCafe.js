import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/MainCafe.css';
import { AuthContext } from "../App";
import { getApi } from "../api";
import dayjs from 'dayjs';
import axios from "axios";

const MainCafe = () => {
    const authContext = useContext(AuthContext);
    const date = dayjs(new Date()).format('YYYY. MM. DD');

    const [info, setInfo] = useState([]);

    useEffect(() => {
        setInfo([]);
        const getMyDonations = async () => {
            const config = {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            };
            // const token = authContext.state.token;
            // if (token) {
            //     config.headers["Authorization"] = `Bearer ${token}`;
            // }
            await axios.get(`http://27.96.134.100:8080/api/cafe?userSeq=${authContext.state.userSeq}`, config)
            .then(({ status, data }) => {
                console.log(status, data);
                setInfo(data.content);
            })
            .catch((e) => {
                console.log(e);
            });
        };
        getMyDonations();
    }, [date, authContext.state.token, authContext.state.userSeq]);

    return (
        <div className="main-cafe">
            <div className="btn-section">
                <Link to={`apply`}>
                    <button className="donation-btn">Post Donation</button>
                </Link>
            </div>

            <div style={{ clear: 'both' }}></div>

            <div className="donation-list">
                <div className="donation-list-title">Donation List</div>

                <div className="donation-list-contents">
                    {
                        info.length ?
                            info.map((e, idx) => (
                                <div className="content-section" key={idx}>
                                    <div>Date: <span>{ e.time.split(' ')[0] }</span></div>
                                    <div>Weight: <span>{ e.coffee } kg</span></div>
                                    <div className="content-link">See your applicants</div>
                                </div>
                            )) :
                            <div className="empty-title">
                                <div>Any Donations yet.</div>
                                <div>Go Start to Save the Earth!</div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MainCafe;