import {createApp} from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import { routes } from './routes'
import { store } from './store/store'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

const myapp = createApp(App)
myapp.use(router)
myapp.use(store)
myapp.use(ElementPlus)
myapp.mount("#app")
