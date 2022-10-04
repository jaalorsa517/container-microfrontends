<script setup>
import { ref } from "vue";

const isOpen = ref(false);

function onOpen() {
  isOpen.value = true;
}

function onSubmit(e) {
  isOpen.value = e.detail;
}
</script>
<template>
  <button class="btnPrincipal" @click="onOpen">Mostrar button</button>
  <wc-alert id="app" titulo="Precaución" :isopen="String(isOpen)" @submit="onSubmit">
    <p>Esto es el mensaje que quiero mostrar</p>
  </wc-alert>
</template>
<style scoped>
.btnPrincipal {
  padding: 0.8em;
  margin: auto;
  background-color: #213785;
  color: white;
  border: none;
  outline: none;
  border-radius: 0.3em;
  cursor: pointer;
}
.btnPrincipal:hover {
  opacity: 0.8;
}
</style>
