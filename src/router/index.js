import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/pages/HomePage';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import Clients from '@/pages/Clients';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage,
        },
        {
            path:'/About',
            name: 'About',
            component: About
        },
        {
            path:'/Services',
            name: 'Services',
            component: Services
        },
        {
            path:'/Contact',
            name: 'Contact',
            component: Contact
        },
        {
            path:'/Clients',
            name: 'Clients',
            component: Clients
        }
    ]
})