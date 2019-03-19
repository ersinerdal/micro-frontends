import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const BasicExample = () => (
    <Router>
        <div id='manin-app'>
            <ul id='main-nav'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/react">React App</Link>
                </li>
                <li>
                    <Link to="/angular-js">AngularJs App</Link>
                </li>
                <li>
                    <Link to="/vue">Vue App</Link>
                </li>
                <li>
                    <Link to="/angular">Angular App</Link>
                </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/react" component={ReactApp} />
            <Route path="/angular-js" component={AngularJs} />
            <Route path="/vue" component={Vue} />
            <Route path="/angular" component={Angular} />
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2 className="main-page-title">Home</h2>
        <div className="main-content">
            {/*<angular-element></angular-element>*/}
            {/*<vue-element></vue-element>*/}
        </div>
    </div>
);

const ReactApp = () => (
    <div>
        <h2 className="main-page-title">React App</h2>
        <div className="main-content">
          <react-element></react-element>
        </div>
    </div>
);

const AngularJs = () => (
    <div>
        <h2 className="main-page-title">AngularJS App</h2>
        <div className="main-content">
          <angular-js-element></angular-js-element>
        </div>
    </div>
);

const Vue = () => (
    <div>
        <h2 className="main-page-title">Vue App</h2>
        <div className="main-content">
            <vue-element></vue-element>
        </div>
    </div>
);
const Angular = () => (
    <div>
        <h2 className="main-page-title">Angular App</h2>
        <div className="main-content">
            <angular-element></angular-element>
        </div>
    </div>
);


render(<BasicExample />, document.getElementById('root'));
