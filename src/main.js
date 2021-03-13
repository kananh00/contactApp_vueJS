import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


createApp(App).use(store).use(router).mount('#app')

// new Vue({
//     store: store,
//     router: router,
//     el: '#app',
//     render: h => h(App)
// })