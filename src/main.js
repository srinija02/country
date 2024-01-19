import {createApp} from 'vue'
import App from './App.vue';
import componentsA from './components/componentsA.vue';
import SearchComponent from './components/SearchComponent.vue';
const app = createApp(App)

app.mount('#app');
app.component("componentsA",componentsA)
app.component("SearchComponent",SearchComponent)


