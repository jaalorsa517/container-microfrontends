<script setup>
import { useStore } from "../store/index";

const store = useStore();
function onUserSelected(e) {
  store.$patch({ userSelected: [...e.detail] });
}
</script>
<template>
  <wc-landing limit="4" @userSelected="onUserSelected"></wc-landing>
</template>
