import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import defaultLayout from "@/components/DefaultLayout.vue";


Vue.config.productionTip = false
Vue.component('default-layout', defaultLayout)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
window.onload = function () {
    setTimeout(function () {
        window.scrollTo(0, 1000);
    }, 0)
};