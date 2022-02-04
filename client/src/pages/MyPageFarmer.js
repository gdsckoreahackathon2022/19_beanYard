import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import { getApi } from "../api";
<<<<<<< HEAD
import { Post } from "../components";

const initialData = [
  {
    cafeName: "ccccc",
    phone: "010-1233-1111",
    cafeLocation: "d",
    coffee: "d",
    time: "d",
  },
];

const MyPageFarmer = () => {
  const authContext = useContext(AuthContext);
  const [farmerData, setFarmerData] = useState({
    userName: "ㄴㅈㅈ",
    phone: "010-9777-7777",
    farm: "sdf",
    plant: "pepper",
  });
  const [applyList, setApplyList] = useState(initialData);

  useEffect(() => {
    const getFarmerProfile = async () => {
      await getApi(
        {
          userName: authContext.state.userName,
        },
        "/api/user",
        authContext.state.token
      )
        .then(({ status, data }) => {
          // if (status === 200) {
          //     setFarmerData({
          //         userName: authContext.state.userName,
          //         phone: data.phone,
          //         farm: data.farm,
          //         plant: data.plant,
          //         coffee: data.coffee,
          //     });

          //     setApplyList(
          //         data.applyList.map((d, i) => ({
          //             postSeq: d.applyListSeq,
          //             cafeName: d.cafeName,
          //             phone: d.phone,
          //             cafeLocation: d.cafeLocation,
          //             coffee: d.coffee,
          //             time: d.time,
          //         }))
          //     );
          // };
          console.log(data);
=======
import '../styles/MyPageFarmer.css';
import { Link } from "react-router-dom";

const MyPageFarmer = () => {
  const authContext = useContext(AuthContext);
  const [farmerData, setFarmerData] = useState({});
  const [applyList, setApplyList] = useState([]);

  const setVegType = (vegType) => {
    if(vegType === 'PEPPER') return '고추';
  };

  useEffect(() => {
    const getFarmerProfile = async () => {
      await getApi(
        {
          userName: authContext.state.userName,
        },
        "/api/user",
        authContext.state.token
      )
        .then(({ status, data }) => {
          console.log(data);
          setFarmerData(data);
>>>>>>> 93108f5a27368c421e46df9d6e53902b9f0dfc06
        })
        .catch((e) => {
          console.log(e);
        });
    };
<<<<<<< HEAD
    const getFarmerCafe = async () => {
      await getApi({}, "/api/cafe/3", authContext.state.token)
        .then(({ status, data }) => {
          // if (status === 200) {
          //     setFarmerData({
          //         userName: authContext.state.userName,
          //         phone: data.phone,
          //         farm: data.farm,
          //         plant: data.plant,
          //         coffee: data.coffee,
          //     });

          //     setApplyList(
          //         data.applyList.map((d, i) => ({
          //             postSeq: d.applyListSeq,
          //             cafeName: d.cafeName,
          //             phone: d.phone,
          //             cafeLocation: d.cafeLocation,
          //             coffee: d.coffee,
          //             time: d.time,
          //         }))
          //     );
          // };
          console.log(data);
=======

    const getFarmerCafe = async () => {
      await getApi({}, `/api/cafe/${authContext.state.userSeq}`, authContext.state.token)
        .then(({ status, data }) => {
          console.log(data);
          setApplyList(data);
>>>>>>> 93108f5a27368c421e46df9d6e53902b9f0dfc06
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getFarmerProfile();
    getFarmerCafe();
<<<<<<< HEAD
  }, []);

  return (
    // <div>
    //     <div className="MyPageFarmer-Profile">
    //         <h5>농장주 프로필</h5>
    //         <div>
    //             {farmerData.userName}
    //         </div>
    //         <div>
    //             {farmerData.phone}
    //         </div>
    //         <div>
    //             {farmerData.farm}
    //         </div>
    //         <div>
    //             {farmerData.plant}
    //         </div>
    //     </div>
    //     <div className="MyPageFarmer-ApplyList">
    //         {/* map 써서 post 하나씩 배당 - key = {postSeq} */}
    //         <Post
    //             key={1}
    //             cafeName={applyList[0].cafeName}
    //             phone={applyList[0].phone}
    //             cafeLocation={applyList[0].cafeLocation}
    //             coffee={applyList[0].coffee}
    //             time={applyList[0].time}
    //             page={"mypagefarmer"}
    //         />
    //     </div>
    // </div>
    <div></div>
=======
  }, [authContext.state.token, authContext.state.userName, authContext.state.userSeq]);

  return (
    <div className="my-page-farmer">
        <div className="section">
            <div className="farmer-title">농부 닉네임</div>
            <div className="farmer-content">
                {farmerData.userName}
            </div>

            <div className="farmer-title">전화번호</div>
            <div className="farmer-content">
                {farmerData.phone}
            </div>

            <div className="farmer-title">키우는 작물</div>
            <div className="farmer-content">
                {setVegType(farmerData.vegType)}
            </div>
        </div>
        <div>
            <div className="title">내가 신청한 리스트</div>
            <div className="section apply-list">
                {
                    applyList.length &&
                    applyList.map((e, idx) => {
                        return (
                          <div className="apply-list-card" key={idx}>
                              <p className="card-content">카페이름: <span>{e.name}</span></p>
                              <p className="card-content">날짜: <span>{e.time.split(' ')[0]}</span></p>
                              <p className="card-content">주소: <span>{e.location}</span></p>
                              <p className="card-content">신청한 커피박 양: <span>{e.coffee}</span></p>
                              <p className="card-content">커피박 수거 가능 시간: <span>{e.time}</span></p>
                          </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
>>>>>>> 93108f5a27368c421e46df9d6e53902b9f0dfc06
  );
};

export default MyPageFarmer;