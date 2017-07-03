import React, {Component} from 'react';

export default class LoaderBar extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 1500);
    }

    render() {
        return (<div className={this.state.loading&&'loader'} id="loaderBar"/>
        );
    }
}

