import React from 'react';
import classes from './Logo.css';
import SugarplumsInJar from '../../assets/images/sweetsinjar.png';


const logo = (props) => (
    <div className={classes.logo}>
        <img src={SugarplumsInJar} alt="Goalsjar" />
    </div>
);

export default logo;