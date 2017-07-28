import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Main from './common/main.component.jsx';
import Home from './common/home.component.jsx';
import Investor from './common/investor.component.jsx';
import Borrower from './common/borrower.component.jsx';
import Loancalc from './common/loancalc.component.jsx';
import PersonalDetails from './common/personaldetails.component.jsx';
import AddressDetails from './common/addressdetails.component.jsx';
import Trade from './common/trade.component.jsx'


render(
    <Router history={hashHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/investor" component={Investor}/>
            <Route path="/borrower" component={Borrower}/>
            <Route path="/Loancalc" component={Loancalc}/>
            <Route path="/personaldetails" component={PersonalDetails}/>
            <Route path="/addressdetails" component={AddressDetails}/>
            <Route path="/trade" component={Trade}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
