import '@/bootstrap';
import App from '@/App.vue';
import {createApp} from "vue";
import {createPinia} from 'pinia';
import router from "@/router/index.js";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import Antd, { message } from 'ant-design-vue';

import 'ant-design-vue/dist/reset.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import '@/assets/css/reset.css';
import '@/assets/css/grid.css';
import '@/assets/css/services/comment-app/styles.css';
import '@/assets/css/prism.css';
import '@/assets/css/fonts/styles.css';
import '@/assets/css/editor.main.css';
import '@/assets/css/styles.css';
import '@/assets/css/index-CUVRwW2A.css';

import axios from "axios";

window.axios = axios;

const pinia = createPinia();

const app = createApp(App);

//Antd
app.use(Antd);

app.use(router);
app.use(pinia);
app.use(LoadingPlugin);

app.mount("#app");

app.config.globalProperties.$message = message;
