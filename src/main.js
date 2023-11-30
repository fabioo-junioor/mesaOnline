import { createApp } from 'vue'
import App from './App.vue'

/* primevue */
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar';


import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'


createApp(App)
    .use(PrimeVue)
    .component('Button', Button)
    .component('Menubar', Menubar)
    .mount('#app')
