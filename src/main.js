import Vue from 'vue'
import App from './App.vue'
import { Slider, Slide } from './plugins/Slider';
import {tns}  from "../node_modules/tiny-slider/src/tiny-slider"
import '../node_modules/tiny-slider/dist/tiny-slider.css'

Vue.prototype.$tns = tns;

Vue.component('Slider', Slider);
Vue.component('Slide', Slide);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
