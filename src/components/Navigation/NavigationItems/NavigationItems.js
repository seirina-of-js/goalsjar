import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.navigationItems}>
        <NavigationItem link="/" active >Goalsjar</NavigationItem>
        <NavigationItem link="/">Another page</NavigationItem>
    </ul>
);

export default navigationItems;