import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCytoscape from 'vue-cytoscape'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  VueCytoscape
}).$mount('#app');
