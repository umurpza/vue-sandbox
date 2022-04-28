import { createApp } from 'vue'
import App from './App.vue'
import VueMathjax from 'vue-mathjax-next';
// import Mathjax from 'mathjax';

import * as SRE from "speech-rule-engine";

try {
    SRE.setupEngine({semantics: true});

    SRE.engineReady().then(() => console.log("SRE ready"));

    // console.log(Mathjax.init().then(console.log("MathJax Loaded")))
} catch (e) {
    console.log(e)
}

createApp(App).use(VueMathjax).mount('#app')


console.log('App Created')