import React, { Component } from 'react';
import classes from './Sugarplums.css';
import Sugarplum from './Sugarplum/Sugarplum';

class Sugarplums extends Component {
    render() {
        const { sugarplums } = this.props;

        if (sugarplums.length === 0) {
            return null;
        }

        return (
            <div className={classes.sugarplums}>
                {sugarplums.map( item => {
                    return <Sugarplum key={item.id} {...item} />
                })}
            </div>
        );
    }
}

export default Sugarplums;