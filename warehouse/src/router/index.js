import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../components/Homepage'
import About from '../components/About'
import Contact from '../components/Contact'
import Pricing from '../components/Pricing'

const routes = [
    { 
        path: '/',
        name: "Homepage",
        component: Homepage 
    },
    { 
        path: '/about',
        name: "About",
        component: About
    },
    { 
        path: '/contact', 
        name: "Contact",
        component: Contact 
    },
    { 
        path: '/pricing', 
        name: "Pricing",
        component: Pricing 
    },

  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;