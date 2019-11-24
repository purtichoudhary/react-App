import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link,
    Route,
    HashRouter,
    BrowseRouter
} from "react-router-dom";

import Wearabletech from "./Wearabletech";
import Machinelearning from "./Machinelearning";
import Computerscience from "./Computerscience";
import Newsdata from "./Newsdata";

ReactDOM.render(
  <App/>, 
  document.getElementById("root")
);

const routing = (
    <HashRouter>
        <div>
            <Route exact path="/" component={Main}/>
            <Route path="/Wearabletech" component={Wearabletech}/>
            <Route path="/Machinelearning" component={Machinelearning}/>
            <Route path="/Computerscience" component={Computerscience}/>
        </div>
    </HashRouter>
)
ReactDOM.render(routing, document.getElementById('main'));

serviceWorker.unregister();
