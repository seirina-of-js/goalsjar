import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import Sugarplums from '../../components/Sugarplums/Sugarplums';

class Jar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sugarplums: []
        }
    }

    render() {
        const { sugarplums }= this.state
        return (
            <Aux>
                <div>Sugarplums controls</div>
                <Sugarplums sugarplums={sugarplums}/>
            </Aux>
        );
    }
}

export default Jar;