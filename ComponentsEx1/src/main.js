import Vue from 'vue'
import App from './App.vue'

Vue.component("user-name", {
  template: "<p>Hi</p>"
});

new Vue({
  el: '#app',
  render: h => h(App)
})