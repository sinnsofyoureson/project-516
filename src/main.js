import Vue from 'vue';
import App from './App.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VueLodash from 'vue-lodash';

const options = { name: 'lodash' };
Vue.use(VueMaterial);
Vue.use(VueLodash, options);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
