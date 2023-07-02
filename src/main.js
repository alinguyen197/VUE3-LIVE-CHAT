import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/main.css";


// import firebase auth service
import { projectAuth } from './firebase/config'

// createApp(App).use(store).use(router).mount('#app')
// handle việc khi refresh chỉ create router 1 lần duy nhất
let app

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(store)
      .mount('#app')
  }
})