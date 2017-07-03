import React, {Component} from 'react';
import Breadcrumb from "../Breadcrumb/index";
import {API_BASE_URL} from "../../config";
import "./items.sass"

const NoItem = () => (
    <div className="zrp-box">
        <div className="search-icon">
            <svg className="svg-zrp-search" width="80" height="80" viewBox="0 0 80 80"
                 xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path
                        d="M37.891 50.705c4.584-1.85 8.61-5.256 11.216-9.957m2.764-9.071c.456-5.499-1.142-10.977-4.48-15.29a21.276 21.276 0 0 0-6.53-5.599c-5.845-3.24-12.566-3.444-18.403-1.139-4.65 1.836-8.739 5.265-11.375 10.022a22.488 22.488 0 0 0-2.832 10.308 22.102 22.102 0 0 0 3.058 11.86 21.288 21.288 0 0 0 8.02 7.79 21.275 21.275 0 0 0 8.427 2.594 21.853 21.853 0 0 0 10.135-1.518"
                        stroke="#484848" strokeLinecap="round"/>
                    <path
                        d="M28.774 45.86a16.046 16.046 0 0 1-9.688-4.642m-3.693-5.7c-1.4-3.695-1.38-7.782.065-11.41a15.238 15.238 0 0 1 3.392-5.144c3.384-3.384 7.97-4.852 12.444-4.417 3.564.346 7.056 1.9 9.81 4.654 1.9 1.9 3.23 4.153 3.984 6.538a15.83 15.83 0 0 1 .236 8.768 15.246 15.246 0 0 1-3.984 6.947 15.237 15.237 0 0 1-5.289 3.449 15.651 15.651 0 0 1-7.277.956"
                        stroke="#484848" strokeLinecap="round"/>
                    <g fill="#484848">
                        <path d="M35.644 35.95l-12-12 .572-.572 12 12z"/>
                        <path d="M36.215 23.95l-12 12-.57-.572 11.999-12z"/>
                    </g>
                    <path d="M52.267 52.61l-6.646-6.647" stroke="#484848"
                          strokeLinecap="square"/>
                    <path
                        d="M61.601 54.585l-2.823-2.824c-1.405-1.405-3.988-1.099-5.768.682-1.78 1.78-2.087 4.363-.682 5.768l9.599 9.599 8.89 8.89c1.403 1.404 3.987 1.098 5.767-.682 1.78-1.78 2.086-4.364.683-5.768"
                        fill="#FFDB15"/>
                    <path
                        d="M52.095 58.273c-1.404-1.405-1.283-3.803.27-5.356s3.951-1.674 5.356-.27l9.6 9.6 8.89 8.89"
                        stroke="#484848" strokeLinecap="round"/>
                </g>
            </svg>
        </div>
        <div className="info">
            <h3 className="header__title">
                No
                hay publicaciones que coincidan con tu búsqueda.
            </h3>
            <ul className="links__list">
                <li>Revisa la ortografía de la palabra.</li>
                <li>Utiliza palabras más genéricas o menos palabras.</li>
            </ul>
        </div>
    </div>
)
export default class Items extends Component {
    constructor(props, context) {
        super(props);
        this.state = {searchResults: null}
    }

    startsSearchingMode() {
        this.loader.setState({loading: true});
    }

    endsSearchingMode() {
        this.loader.setState({loading: false});
    }

    componentDidMount() {
        let someElement = document.getElementById("loaderBar");
        this.loader = window.FindReact(someElement);
        this.doSearch()
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.props.location.search !== nextProps.location.search) {
            this.doSearch(false, nextProps)
        }
    }

    doSearch(text, props = this.props) {
        if (!text) {
            const params = new URLSearchParams(props.location.search);
            text = params.get('search');
        }
        this.startsSearchingMode();
        fetch(API_BASE_URL + '/items?q=' + text)
            .then(result => {
                return result.json()
            })
            .then(result => {
                this.setState({searchResults: result});
                console.log("/api/items?q=:query =>", result);
                this.endsSearchingMode();
            })
    }

    render() {
        return (
            <div id="ml-main" className="ml-main">
                {!!this.state.searchResults ? this.state.searchResults.items.length ?
                    <ItemsItem items={this.state.searchResults.items}
                               topCategory={this.state.searchResults.topCategory}/> : <NoItem/> : null}
            </div>

        )
    }
}

class ItemsItem extends Component {
    render() {
        return (
            <div>
                <Breadcrumb top-category={this.props.topCategory}/>
                <div>
                    <h1>
                        <ol id="searchResults" className="section search-results list-view stack search-results-core">
                            {
                                this.props.items.map((i, k) => (
                                    <li key={k} className="results-item article stack item-without-installmets">
                                        <a href={"/items/" + i.id}>
                                            <div className="rowItem item item--stack new " id="MLA620675514">
                                                <div className="item__image item__image--stack">
                                                    <div className="images-viewer">
                                                        <div className="image-content">
                                                            <img width="160"
                                                                 height="160"
                                                                 alt="Mascara Cuello Neoprene Polar + Guantes Primera Piel Fasmoto"
                                                                 src={i.picture}
                                                                 className="lazy-load"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item__info-container ">
                                                    <div className="item__info">
                                                        <h2
                                                            className="item__title list-view-item-title">
                                                            <div
                                                                className="item__info-title"> <span
                                                                className="main-title"> {i.title} </span>
                                                            </div>
                                                        </h2>
                                                        <div className="price__container"><span className="price-old"
                                                                                                itemProp="price-old">  </span>
                                                            <div className="item__price item__price-discount"><span
                                                                className="price-symbol">{i.price.currency}$</span>
                                                                <span
                                                                    className="price-fraction">{i.price.amount}</span>
                                                            </div>
                                                        </div>
                                                        <div className="item__stack_column">
                                                            <div className="item__stack_column__info">
                                                                {(i.free_shipping) &&
                                                                <div className="stack_column_item shipping">
                                                                    <div
                                                                        className="item__shipping icon-truck-small item__free-shipping-disabled">
                                                                        <p className="stack-item-info item__free-shipping-disabled">
                                                                            Envío a todo el país </p></div>
                                                                </div>}
                                                                <div className="stack_column_item status">
                                                                    <div className="item__status">
                                                                        <div className="item__condition">
                                                                            Capital
                                                                            Federal
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="stack_colum_right without-attributes without-reviews"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ol>
                    </h1>
                </div>
            </div>
        )
    }
}