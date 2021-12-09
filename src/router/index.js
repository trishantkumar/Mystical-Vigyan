import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/pages/HomePage';
import About from '@/pages/About';
import Numerology from '@/pages/Numerology';
import Contact from '@/pages/Contact';
import Nameology from '@/pages/Nameology';

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
            path:'/about',
            name: 'About',
            component: About
        },
        {
            path:'/numerology',
            name: 'Numerology',
            component: Numerology
        },
        {
            path:'/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path:'/nameology',
            name: 'Nameology',
            component: Nameology
        },
    ]
})