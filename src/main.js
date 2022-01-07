import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from './store'

import {Tabs, Tab} from 'vue3-tabs-component';

createApp(App).use(store).use(router).component('tabs', Tabs).component('tab', Tab).mount('#app')


