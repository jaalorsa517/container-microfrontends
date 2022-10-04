<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const form = ref(null);

onMounted(() => {
  form.value?.addEventListener("submitEvent", onSubmit);
});

onUnmounted(() => {
  form.value?.removeEventListener("submitEvent", onSubmit);
});

function onSubmit(e) {
  console.log(e.detail);
}
</script>
<template>
  <form-wc id="app" title="Mi formulario" ref="form">
    <input class="myForm__nombre" name="nombre" placeholder="nombre" />
    <input class="myForm__nombre" name="edad" placeholder="edad" />
  </form-wc>
</template>

<style scoped>
.myForm__nombre {
  color: #213547;
  padding: 0.4em;
}
.myForm__nombre:focus {
  outline: none;
  border: 1px solid red;
}
</style>
