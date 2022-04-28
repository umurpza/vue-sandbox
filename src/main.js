import {createApp} from 'vue'
import App from './App.vue'
import VueMathjax from 'vue-mathjax-next';
import * as SRE from "speech-rule-engine";

try {
    SRE.setupEngine({semantics: true});

    SRE.engineReady().then(() => console.log("SRE ready"));
} catch (e) {
    console.log(e);
}

createApp(App).use(VueMathjax).mount('#app')


console.log('App Created')