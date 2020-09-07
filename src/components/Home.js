import React from 'react';
import web from "../images/img1.jpg";
import { NavLink } from 'react-router-dom';
import Commom from './commom';

const Home = () => {
    return (
        <>
            <Commom
             name="Grow your business with"
             imgsrc={web}
             visit="/service" 
             btname="Get started" />
        </>
    )
}

export default Home
