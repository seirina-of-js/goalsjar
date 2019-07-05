import React, { Component } from 'react';
import classes from './App.css';
import Layout from './components/Layout/Layout';
import Jar from './containers/Jar/Jar';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={classes.App}>
                <Layout>
                    <Jar/>
                </Layout>
            </div>
    )
    }
};

export default App;