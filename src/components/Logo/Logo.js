import React from 'react';
import classes from './Logo.css';
import SugarplumsInJar from '../../assets/images/sweetsinjar.png';


const logo = (props) => (
    <div className={classes.logo} style={{height: props.height}}>
        <img src={SugarplumsInJar} alt="Goalsjar" />
    </div>
);

export default logo;