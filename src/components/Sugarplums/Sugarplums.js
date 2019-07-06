import React, { Component } from 'react';
import classes from './Sugarplums.css';
import Sugarplum from './Sugarplum/Sugarplum';

class Sugarplums extends Component {
    render() {
        const { sugarplums } = this.props;

        let transformedSugarplums = Object.keys(sugarplums)
            .map(sugarplumKey => {
                return [...Array(sugarplums[sugarplumKey])].map((_, i) => {
                    return <Sugarplum key={sugarplumKey + i} type={sugarplumKey} />
                })
            })
            .reduce((arr, el) => {
                return arr.concat(el);
            }, []);

        if (transformedSugarplums.length === 0) {
            transformedSugarplums = <p className={classes.firstSugarplumMessage}>Please add your first sugarplum!</p>
        }

        return (
            <div className={classes.sugarplums}>
                {transformedSugarplums}
            </div>
        );
    }
}

export default Sugarplums;