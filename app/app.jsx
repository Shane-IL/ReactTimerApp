import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Countdown from 'Countdown';
import Timer from 'Timer';

//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//Load app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Timer}/>
            <Route path="countdown" component={Countdown}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
