<script setup>
import { onMounted, ref } from "vue";

const isShow = ref(true);
const app = ref(null);

function clickBtn() {
  app.value.setAttribute("isOpen", "true");
  isShow.value = false;
}

onMounted(() => {
  app.value.addEventListener("submit", (e) => {
    app.value.setAttribute("isOpen", "false");
    isShow.value = true;
  });
});
</script>
<template>
  <button class="btnPrincipal" @click="clickBtn" v-if="isShow">Mostrar Alert de Angular</button>
  <wc-alert titulo="Precaución" ref="app">
    <p>Esto es el mensaje que quiero mostrar</p>
  </wc-alert>
</template>
