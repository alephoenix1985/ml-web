import React, {Component} from 'react';
import '../../styles/ml.sass';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "../../components/Header/";
import LoaderBar from "../../components/LoaderBar/";
import Items from "../../components/Items/";
import Item from "../../components/Item/";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 1000);
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <LoaderBar/>
                    <Route path="/" component={Header}/>
                    <main>
                        <div className="nav-main-content">
                            <Route exact path="/items" component={Items}/>
                            <Route exact path="/items/:id" component={Item}/>
                        </div>
                    </main>
                </div>
            </Router>
        )
    }
}