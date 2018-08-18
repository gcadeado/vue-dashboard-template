import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./lazyLoader')

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: _import('HelloWorld')
    },
    { path: '/login', component: _import('login/index'), hidden: true },
    { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
    { path: '/404', component: _import('errorPage/404'), hidden: true },
    { path: '/401', component: _import('errorPage/401'), hidden: true }
  ]
})
