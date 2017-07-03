import React, {Component} from 'react';

export default class Header extends Component {
    search(e) {
        e.preventDefault();
        let text = e.target['as_word'].value;
        this.props.history.push({
            pathname: '/items', search: 'search=' + text, state: 'search'
        })
    }

    render() {
        return (
            <header role="banner" className="nav-header nav-header-sticky">
                <div className="nav-bounds  nav-bounds-large">
                    <a className="nav-logo" href="//www.mercadolibre.com.ar/">
                        Mercado Libre Argentina - Donde comprar y vender de todo
                    </a>
                    <form onSubmit={this.search.bind(this)} className="nav-search"
                          role="search">
                        <input tabIndex="1" type="text" className="nav-search-input"
                               name="as_word" maxLength="120" autoCapitalize="off" autoCorrect="off"
                               spellCheck="false" placeholder="Nunca dejes de buscar" autoComplete="off"
                        />
                        <button className="nav-search-clear-btn" type="button"
                                title="menu.autoComplete.clear"/>
                        <button className="nav-search-close-btn" type="button"
                                title="menu.autoComplete.close"/>
                        <p id="mlCategory" className="nav-category" title="Solo en Computación">
                        </p>
                        <button type="submit" className="nav-search-btn">
                            <i className="nav-icon-search"><span>Buscar</span></i>
                        </button>
                    </form>
                </div>
            </header>
        );
    }
}

