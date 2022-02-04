import React, { useContext, useState, useEffect } from "react";
import { getApi } from "../api";
import { Link } from "react-router-dom";

const Post = ({
        postSeq,
        cafeName,
        phone,
        cafeLocation,
        coffee,
        time,
        page, // page = mypagefarmer -> 신청버튼 X / mainfarmer -> 신청버튼 O
    }) => {
    
    return (
        <div className="farmer-apply-card">
            <Link to={`/cafedetail/${postSeq}`}>
                <p>카페이름: {cafeName}</p>
                <p>전화번호: {phone}</p>
                <p>주소: {cafeLocation}</p>
                <p>신청한 커피박 양: {coffee}</p>
                <p>커피박 수거 가능 시간: {time}</p>
            </Link>
        </div>
        
    )
};

export default Post;
