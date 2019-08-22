import Home from './views/home.vue';
import test from './views/test.vue';

import NotFound from './views/404.vue';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('./views/login.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default })
      });
    } ,
  },
  {
    path: '/test',
    component: test,
  },
  
  {
    path: '(.*)',
    component: NotFound,
  },
];
