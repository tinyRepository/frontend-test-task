import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import storeState from './store';
import 'normalize.css';
import '@/styles/common.scss';

Vue.use(Vuex);
const store = new Vuex.Store(storeState);

import ButtonEl from '@/components/ButtonEl';

Vue.component('button-el', ButtonEl);

Vue.config.productionTip = false;

Vue.prototype.$wip = () => alert('Функционал в разработке');

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
