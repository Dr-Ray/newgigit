import { createApp } from 'vue';
import './index.css';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Login from "./pages/auth/login.vue";
import Register from "./pages/auth/register.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: App },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
    ]
});

createApp(App).mount('#app');
