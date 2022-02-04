import React from "react";
import { Link } from "react-router-dom";

const ChooseType = () => {
    return (
        <div className="ChooseType">
            <div>Join as...</div>
            <Link to='/signup' page="cafe">A cafe owner</Link>
            <Link to='/signup' page="farmer">A farmer</Link>
        </div>
    );
};

export default ChooseType;
