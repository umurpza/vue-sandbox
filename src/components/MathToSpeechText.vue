<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr/>

    <h2>Math to Speech Text</h2>
    <p>Edit the Tex Formula to render MathJax and get MathML, or edit MathML to produce English Speech-Text</p>

    <div id="math-to-speech-container">
      <h5>Tex Formula</h5>
      <textarea id="formulaTextarea" v-model="formula" cols="60" rows="5"></textarea>

      <h5 style="margin-top: 10px;">MathJax Rendering</h5>
      <vue-mathjax :formula="formula"></vue-mathjax>

      <h5 style="margin-top: 10px;">MathML</h5>
      <textarea id="mathmlTextarea" v-model="mathml" cols="60" rows="5"></textarea>

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
  // let formulaTextarea = document.getElementById('formulaTextarea');
  let mathmlTextarea = document.getElementById('mathmlTextarea');

  // speechTextEl.textContent = SRE.toSpeech(window.MathJax.tex2mml(formulaTextarea.value));
  speechTextEl.textContent = SRE.toSpeech(mathmlTextarea.value);
  // console.log("Speech Text: " + speechTextEl.textContent);
}

function updateTex() {
  // let formulaTextarea = document.getElementById('formulaTextarea');
  // let mathmlTextarea = document.getElementById('mathmlTextarea');
  // formulaTextarea.value = mml2tex(mathmlTextarea.value);
}

function updateMathMl() {
  let formulaTextarea = document.getElementById('formulaTextarea');
  let mathmlTextarea = document.getElementById('mathmlTextarea');
  mathmlTextarea.value = window.MathJax.tex2mml(formulaTextarea.value);
}

window.$(document).ready(function () {
  SRE.engineReady().then(() => {
    updateMathMl();
    getSpeechText();
  });

  window.$('#formulaTextarea').on('input', () => {
    updateMathMl();
    getSpeechText();
  });

  window.$('#mathmlTextarea').on('input', () => {
    updateTex();
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

  methods: {},

  data() {
    return {
      counter: 0,
      speechText: "",
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
      mathml: ''
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
