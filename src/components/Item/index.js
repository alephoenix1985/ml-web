import React, {Component} from 'react';
import Breadcrumb from "../Breadcrumb/index";
import "./item.sass";
import {API_BASE_URL} from "../../config";

export default class Item extends Component {
    constructor(props, context) {
        super(props);
        this.state = {item: {}};
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
            this.doSearch(nextProps)
        }
    }

    doSearch(props = this.props) {
        this.startsSearchingMode();
        fetch(API_BASE_URL + '/items/' + props.match.params.id)
            .then(result => {
                return result.json()
            })
            .then(result => {
                this.setState({item: result});
                console.log("/api/items/:id =>", result);
                this.endsSearchingMode();
            })
    }

    function

    createMarkup(html) {
        return {__html: html};
    }

    render() {
        return (
            this.state.item && this.state.item.item ?
                <div>
                    <Breadcrumb top-category={this.state.item.category}/>
                    <div className="nav-main-content">
                        <section className="short-description">
                            <header className="vip-section-header vip-bg-alt">
                                <div className="container">
                                    <div className="item-status-notification ch-box-info ch-box-icon ch-hide"
                                         id="redirectedMsg">
                                        <span className="ch-icon-info-sign"/>
                                    </div>
                                </div>
                                <h1 className="vip-title-main ">{this.state.item.item.title}</h1>
                            </header>
                            <section className="vip-section-description vip-bg-alt" id="shortDescription">
                                <div className="vip-gallery-container">
                                    <img width="500px"
                                         height="500px"
                                         alt={this.state.item.item.title}
                                         src={this.state.item.item.picture}
                                         className="lazy-load"/>
                                </div>
                                <form
                                    className="vip-product-info"
                                    id="productInfo">
                                    <fieldset className="vip-price-container">
                                        <legend>Precio</legend>
                                        <article className="vip-price ch-price">
                                            <strong>
                                                $ {(this.state.item.item.price.amount + "").split('.')[0]}<sup>{(this.state.item.item.price.amount + "").split('.').length ? (this.state.item.item.price.amount + "").split('.')[1] : "00"}</sup>
                                            </strong>
                                        </article>
                                    </fieldset>
                                    <div className="vip-actions-wrapper  ">
                                        <div className="vip-actions item-actions u-clearfix">
                                            <div className="vip-action-primary">
                                                <input type="submit" data-js="vip-action-primary" form="productInfo"
                                                       title="Comprar  Mascara Cuello Neoprene Polar + Guantes Primera Piel Fasmoto"
                                                       value="Comprar" className="ui-button ui-button--primary"
                                                       id="BidButtonTop" tabIndex="3"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </section>
                        <section className="vip-section-item-description">
                            <div className="vip-section-header">
                                <h2 className="vip-title-main item-description__title">Descripción del Producto</h2>
                            </div>
                            <section className="description-container description-container--text">
                                <div className="item-description__content ">
                                    <pre
                                        className="preformated-text"
                                        dangerouslySetInnerHTML={this.createMarkup(this.state.item.item.description)}></pre>
                                </div>
                            </section>
                        </section>
                    </div>
                </div> : null
        );
    }
}