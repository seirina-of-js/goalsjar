import React, { Component } from 'react';
import classes from './Sugarplum.css';
import bindClassNames from 'classnames/bind';
import PropTypes from 'prop-types';

class Sugarplum extends Component {
    render() {
        const cx = bindClassNames(styles);
        let sugarplum = null;

        switch (this.props.type) {
            case ('big'):
                sugarplum = <div className={cx(classes.sugarplum, classes.big)} style={{ color: this.props.color}}></div>;
                break;
            case ('medium'):
                sugarplum = <div className={cx(classes.sugarplum, classes.medium)} style={{ color: this.props.color}}></div>;
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