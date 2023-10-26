import '/public/assets/scss/style.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

const app = createApp(App);

app.use(router);

app.use(store).mount('#app');
