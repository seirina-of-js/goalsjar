import React from 'react';
import classes from './ManagingControls.css';
import ManagingControl from './ManagingControl/ManagingControl';


const controls = [
    { label: 'Big sugarplum', type: 'big' },
    { label: 'Medium sugarplum', type: 'medium' },
    { label: 'Small sugarplum', type: 'small' }
];

const managingControls = (props) => (
    <div className={classes.managingControls}>
        {controls.map(ctrl => (
            <ManagingControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.sugarplumAdded(ctrl.type)}
                removed={() => props.sugarplumRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
    </div>
);

export default managingControls;