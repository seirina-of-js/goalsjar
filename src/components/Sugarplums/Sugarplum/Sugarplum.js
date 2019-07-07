import React, { Component } from 'react';
import classes from './Sugarplum.css';
import PropTypes from 'prop-types';

class Sugarplum extends Component {
    render() {
        let sugarplum = null;

        switch (this.props.type) {
            case ('big'):
                sugarplum = <div className={[classes.sugarplum, classes.big].join(' ')} style={{ color: this.props.color}}></div>;
                break;
            case ('medium'):
                sugarplum = <div className={[classes.sugarplum, classes.medium].join(' ')} style={{ color: this.props.color}}></div>;
                break;
            case('small'):
                sugarplum = <div className={classes.sugarplum} style={{ color: this.props.color}}></div>;
                break;
            default:
                sugarplum = null;
        }

        return sugarplum;
    }
}


Sugarplum.propTypes = {
    type: PropTypes.string.isRequired
};


export default Sugarplum;