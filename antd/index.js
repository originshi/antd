/**
 * Created by pc on 2017/7/21.
 */
import 'babel-polyfill'
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link,hashHistory ,browserHistory  } from 'react-router'
import './src/less/a.less'

import routeConfig from './routes';

//

import App from './components/app';
// import Test from './components/test';
// import login from './components/login';




render(

    <Router  history={hashHistory} routes={routeConfig} />

    ,
    document.getElementById('root')
)

// const test = (location, callback) => {
//     require.ensure([], require => {
//         alert(1)
//         callback(null, require('./components/test').default)
//     }, 'test')
// }
//
// const login = (location, callback) => {
//     require.ensure([], require => {
//         alert(2)
//         callback(null, require('./components/login').default)
//     }, 'login')
// }
// <Router history={hashHistory}>
//     <Route path="/" component={App}>
//     <Route path="test" getComponent={test}></Route>
//     <Route path="login" getComponent={login}></Route>
//     </Route>
//     </Router>