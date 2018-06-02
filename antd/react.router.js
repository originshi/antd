/**
 * Created by pc on 2017/7/24.
 */
import React from 'react'
import {
    Route,
    IndexRoute
} from 'react-router'
import App from './components/app'
import  Welcome from './components/Welcome'
// import Login from './containers/App/login'

// import {
//   houseCheck,
//   houseManage,
//   houseDetail,
//   roomDetail,
// } from './pages/house'

// import popCheck from './pages/pop/index'

const rater = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/rater').default)
    }, 'rater')
}


const Login = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/login').default)
    }, 'login')
}


const test = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/test').default)
    }, 'test')
}

/* 进入路由的判断*/
function isLogin(nextState, replaceState) {
    const token = sessionStorage.getItem('token')
    if (!token) {
        replaceState('/login')
        // hashHistory.push('/login')
    }
}

const routes = (
    <Route>
        <Route path="/" component={App} onEnter={isLogin}>
            {/*<IndexRoute component={Welcome} />*/}
            {/*<Route path="/houseManage" getComponent={rater} />*/}

            {/*<Route path="/test" getComponent={test} query={{'name': 'dupi'}} />*/}

        </Route>
        {/*<Route path="/login" getComponent={Login}></Route>*/}
    </Route>
);

export default routes;

