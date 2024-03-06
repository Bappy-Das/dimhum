import { createApp } from 'vue';
import router from "./routers";
import './style.css';
import App from './App.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'; // Import library from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far, fab);

const vueSetup = createApp(App);
vueSetup.component('font-awesome-icon', FontAwesomeIcon);
vueSetup.use(router);
vueSetup.mount('#app');