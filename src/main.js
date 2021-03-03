import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import '@/styles/common.scss';

import ButtonEl from '@/components/ButtonEl';

Vue.component('button-el', ButtonEl);

Vue.config.productionTip = false;

Vue.prototype.$wip = () => alert('Функционал в разработке');

new Vue({
  render: h => h(App),
}).$mount('#app');
