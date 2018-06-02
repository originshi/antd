/**
 * Created by pc on 2017/7/24.
 */
// import App from './components/app'
// import Rater from './components/rater'

// import login from './components/login'
// import welcome from './components/welcome'
// import  test from './components/test'
const routeConfig = [
    { path: '/',
        //component: App,
        // indexRoute: { component: App },
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('./components/app').default)
            }, 'App')},
        // getChildRoutes(location, callback) {
        //     require.ensure([], function (require) {
        //         callback(null, [
        //             require('./components/login'),
        //             require('./components/test'),
        //             require('./components/welcome'),
        //         ])
        //     })
        // },
            childRoutes: [

            { path: 'test',
                //component: login,
                getComponent(nextState, cb) {
                    require.ensure([], (require) => {
                        cb(null, require('./components/test').default)
                    }, 'test')},
                childRoutes: [
                    { path: 'welcome/:id',
                      getComponent(nextState, cb) {
                        require.ensure([], (require) => {
                            cb(null, require('./components/welcome').default)
                        }, 'welcome')} },
                    // { path: 'messages/:id',
                    //     onEnter: function (nextState, replaceState) {
                    //         replaceState(null, '/messages/' + nextState.params.id)
                    //     }
                    // }
                ]
            }
        ]
    },{
    path:"/login",
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('./components/login').default)
            }, 'login')},

    },{
    path:"/rater",
        component: require("./components/rater").default
    }
]
export  {routeConfig as default}