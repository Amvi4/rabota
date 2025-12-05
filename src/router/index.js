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
]

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    }
});

export default router;