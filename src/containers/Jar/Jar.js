import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import Sugarplums from '../../components/Sugarplums/Sugarplums';
import ManagingControls from '../../components/Sugarplums/ManagingControls/ManagingControls';

class Jar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sugarplums: {
                big: 1,
                medium: 0,
                small: 0
            }
        }
    }

    addSugarplumHandler = (type) => {
        const oldCount = this.state.sugarplums[type];
        const updatedCount = oldCount + 1;
        const updatedSugarplums = {
            ...this.state.sugarplums
        };
        updatedSugarplums[type] = updatedCount;
        this.setState({
            sugarplums: updatedSugarplums
        })
    };

    removeSugarplumHandler = (type) => {
        const oldCount = this.state.sugarplums[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedSugarplums = {
            ...this.state.sugarplums
        };
        updatedSugarplums[type] = updatedCount;
        this.setState({
            sugarplums: updatedSugarplums
        })
    };

    render() {
        const { sugarplums }= this.state;
        const disabledInfo = {
            ...this.state.sugarplums
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Sugarplums sugarplums={sugarplums}/>
                <ManagingControls
                    sugarplumAdded={this.addSugarplumHandler}
                    sugarplumRemoved={this.removeSugarplumHandler}
                    disabled={disabledInfo}/>
            </Aux>
        );
    }
}

export default Jar;