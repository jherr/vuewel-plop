import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Vuewel from '@/components/Vuewel.vue';
import ScoreBar from '@/components/ScoreBar.vue';
import PlayArea from '@/components/PlayArea.vue';
import '@/main.css';

Vue.config.productionTip = false;

Vue.component('vuewel', Vuewel);
Vue.component('score-bar', ScoreBar);
Vue.component('play-area', PlayArea);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
