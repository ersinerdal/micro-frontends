import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


const ReactApp = () => (
    <Router>
    <div>
        <div id="react-menu">
            <ul>
                <li>
                    <NavLink exact={true} activeClassName='active' to="/react">Home</NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName='active' to="/react/apage">A link</NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName='active' to="/react/anotherpage">Another Link</NavLink>
                </li>
            </ul>
        </div>
        <div id="react-content">
            <Route exact path="/react" component={Home} />
            <Route path="/react/apage" component={APage} />
            <Route path="/react/anotherpage" component={AnotherPage} />
        </div>
    </div>
    </Router>
);

const Home = () => ( <div>React Home </div>);

const APage = () => (<div>A Page</div>);

const AnotherPage = () => (<div>Another Page</div>);


class ReactElement extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<ReactApp />, this);
    }
    disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this);
    }
}
window.customElements.define('react-element', ReactElement);
