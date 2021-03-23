import Vue from 'vue'
import App from './App.vue'
import plugin from './plugin';
import store from './store';

Vue.config.productionTip = false

new Vue({
	store,
	plugin,
  render: h => h(App),
}).$mount('#app')
