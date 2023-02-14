import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

import vue3GoogleLogin from 'vue3-google-login';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

const app = createApp(App)

app.use(pinia)
app.use(vue3GoogleLogin, {
    clientId: "288770490906-7c6tf66tnq8l1vm5rlgh47l6luk8c4tr.apps.googleusercontent.com",
});
app.use(router)
app.mount('#app')