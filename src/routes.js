import Home from './views/home.vue';
import Login from './views/login.vue';
import test from './views/test.vue';

import NotFound from './views/404.vue';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
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
