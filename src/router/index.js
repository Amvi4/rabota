import { createRouter, createWebHistory } from 'vue-router'

import Main from "../pages/Main.vue";
import Profile from "../pages/Profile.vue";
import Diagnostics from "../pages/Diagnostics.vue";
import Prevention from "../pages/Prevention.vue";
import Therapy from "../pages/Therapy.vue";
import Contacts from "../pages/Contacts.vue";
import Services from "../pages/Services.vue";
import Team from "../pages/Team.vue";
import Reviews from "../pages/Reviews.vue";
import Login from "../pages/auth/Login.vue"
import Register from "../pages/auth/Register.vue"
import Payment from "../pages/auth/Payment.vue";
import Appointment from "../pages/Appointment.vue";

const routes = [
    { path: '/', name: 'main', component: Main },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/diagnostics', name: 'diagnostics', component: Diagnostics },
    { path: '/prevention', name: 'prevention', component: Prevention },
    { path: '/therapy', name: 'therapy', component: Therapy },
    { path: '/contacts', name: 'contacts', component: Contacts },
    { path: '/services', name: 'services', component: Services },
    { path: '/team', name: 'team', component: Team },
    { path: '/reviews', name: 'reviews', component: Reviews },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/payment', name: 'payment', component: Payment },
    { path: '/appointment', name: 'appointment', component: Appointment },
]

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    }
});

export default router;