import React from 'react';
import web from "../images/img8.jpg";
import { NavLink } from 'react-router-dom';
import Commom from './commom';

const About = () => {
    return (
        <>
            <Commom
             name=" Wellcome to About"
             imgsrc={web}
             visit="/contact" 
             btname="Contact Now" />
        </>
    )
}

export default About
