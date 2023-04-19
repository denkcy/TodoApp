import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the CSS or use your own!
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import './assets/main.css'
import './assets/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret , faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faCircleCheck,faTimesCircle)
const app = createApp(App)

app.use(createPinia())
    .component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
const options = {
    // You can set your default options here
};

app.use(
  Vue3Toasity,
  {
    autoClose: 3000,
    // ...
  }
)

app.mount('#app')
