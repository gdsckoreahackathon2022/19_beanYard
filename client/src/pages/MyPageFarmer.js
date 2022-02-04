import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import { getApi } from "../api";
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
        })
        .catch((e) => {
          console.log(e);
        });
    };
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
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getFarmerProfile();
    getFarmerCafe();
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
  );
};

export default MyPageFarmer;
