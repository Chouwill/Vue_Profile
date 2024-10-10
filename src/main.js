import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope,faBars } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faBlogger,
  faLinkedin,
  faVuejs,
  
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */~
library.add(faGithub, faBlogger, faLinkedin, faVuejs, faEnvelope,  faBars,
)

const app = createApp(App)

/* use Pinia */
app.use(createPinia())

/* register font-awesome-icon component globally */
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
