import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from './store'

import {Tabs, Tab} from 'vue3-tabs-component';
import VueAnnouncer from '@vue-a11y/announcer'
import '@vue-a11y/announcer/dist/style.css'

createApp(App).use(store).use(VueAnnouncer, { router }).use(router).component('tabs', Tabs).component('tab', Tab).mount('#app')


