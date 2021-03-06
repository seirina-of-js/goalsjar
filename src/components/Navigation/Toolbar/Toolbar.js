import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <div className={classes.menu} onClick={props.menuClicked}>MENU</div>
        <div className={classes.logo}>
            <Logo />
        </div>
        <nav className={classes.desktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;