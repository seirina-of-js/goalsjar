import React from 'react';
import classes from './ManagingControl.css';

const managingControl = (props) => (
    <div className={classes.managingControl}>
        <div>{props.label}</div>
        <button onClick={props.added}>More</button>
        <button
            onClick={props.removed}
            disabled={props.disabled}>Less</button>
    </div>
);

export default managingControl;