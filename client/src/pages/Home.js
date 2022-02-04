import React from "react";
// import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as HomePic} from '../assets/BeanYard_Web.svg';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* <Logo /> */}
            <HomePic />
        </div>
    );
};

export default Home;
