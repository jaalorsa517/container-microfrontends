<script setup>
import { onMounted, ref } from "vue";

function showMsg(e) {
  alert(e.detail);
}
const app = ref(null);

onMounted(() => {
  app.value.addEventListener("show-msg", showMsg);
});
</script>
<template>
  <wc-animals msg="Bienvenido" ref="app" @onShow-msg="showMsg"></wc-animals>
</template>
