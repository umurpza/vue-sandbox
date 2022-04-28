<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr/>

    <h2>Math to Speech Text</h2>
    <div id="math-to-speech-container">
      <h5>Tex Formula</h5>
      <textarea id="formulaTextarea" v-model="formula" cols="30" rows="5"></textarea>
      <h5>MathJax Rendering</h5>
      <vue-mathjax :formula="formula"></vue-mathjax>
      <br/>
      <h5 style="margin-top: 10px;">English Representation</h5>
      <p id="speechTextEl">{{ speechText }}</p>
    </div>
<!--    <button id="btn" v-on:click="getSpeechText">Get Speech Text</button>-->
  </div>
</template>

<script>
function getSpeechText() {
  let speechTextEl = document.getElementById('speechTextEl');
  let formulaTextarea = document.getElementById('formulaTextarea');

  speechTextEl.textContent = SRE.toSpeech(window.MathJax.tex2mml(formulaTextarea.value));
  // console.log("Speech Text: " + speechTextEl.textContent);
}

window.$(document).ready(function() {
  SRE.engineReady().then(() => getSpeechText());

  window.$('#formulaTextarea').on('input', () => {
    getSpeechText();
  });
});

import * as VueMathjax from "vue-mathjax-next";
import * as SRE from "speech-rule-engine";

export default {
  components: {
    "vue-mathjax": VueMathjax
  },

  name: 'MathToSpeechText',
  speechText: '',

  props: {
    msg: String
  },

  methods: {
    getSpeechText() {
      let speechTextEl = document.getElementById('speechTextEl');
      let formulaTextarea = document.getElementById('formulaTextarea');

      speechTextEl.textContent = SRE.toSpeech(window.MathJax.tex2mml(formulaTextarea.value));

      // console.log("Speech Text: " + speechTextEl.textContent);
    }
  },

  data() {
    return {
      counter: 0,
      speechText: "",
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$'
    }
  },

  mounted: function () {
    // Your JavaScript code comes here in
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
