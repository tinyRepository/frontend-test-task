import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import '@/styles/common.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
