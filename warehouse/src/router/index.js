import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../views/Homepage'
import Contact from '../views/Contact'
import Pricing from '../views/Pricing'
import Fulfillment from '../views/Fulfillment'

const routes = [
    { 
        path: '/',
        name: "Homepage",
        component: Homepage 
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
    { 
        path: '/fulfillment', 
        name: "Fulfillment",
        component: Fulfillment
    },

  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() { 
        window.scrollTo(0,0);
    }
  });
  
  export default router;