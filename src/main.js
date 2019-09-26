import Vue from 'vue';
import "./plugins/vee-validate";
import "./plugins/google-map";
import Contacts from './Contacts.vue';

Vue.use(require('vue-scrollto'));

Vue.config.productionTip = false;

new Vue({
	render: h => h(Contacts)
}).$mount('#app');
