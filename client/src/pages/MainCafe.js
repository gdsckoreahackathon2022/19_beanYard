import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/MainCafe.css';
import dayjs from 'dayjs';

const MainCafe = () => {
    const date = dayjs(new Date()).format('YYYY. MM. DD');
    const weight = 2;

    const [info, setInfo] = useState([]);

    useEffect(() => {
        setInfo([])
    }, [date]);

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
                            info.map((e) => (
                                <div className="content-section">
                                    <div>Date: <span>{ e.date }</span></div>
                                    <div>Weight: <span>{ e.weight } kg</span></div>
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