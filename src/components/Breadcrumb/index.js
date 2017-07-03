import React, {Component} from 'react';

export default class Breadcrumb extends Component {
    constructor(props) {
        super(props);
        this.category = props['top-category'] || []
    }

    componentWillUpdate(nextProps, nextState) {
        this.category = [nextProps['top-category']]
    }

    render() {
        return (
            <section id="related-searches-section" className="related-searches"><p> Categoria:&nbsp; </p>
                <ul className="related-searches__list">
                    <li><a href=""> {this.category} </a></li>
                </ul>
            </section>
        );
    }
}

