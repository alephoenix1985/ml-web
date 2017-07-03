import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/Home/index";

import './styles/ml.sass';

window.FindReact = function(dom) {
    for (let key in dom) {
        if (key.startsWith("__reactInternalInstance$")) {
            let compInternals = dom[key]._currentElement;
            let compWrapper = compInternals._owner;
            let comp = compWrapper._instance;
            return comp;
        }
    }
    return;
};
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);