<script setup>
import { onBeforeMount, ref } from "vue";
import { useStore } from "./store";

const store = useStore();
const showNav = ref(false);

store.$subscribe(() => {
  showNav.value = !store.isMobile;
});
</script>

<template>
  <div class="appRoot">
    <header class="appRoot__header">
      <div class="appRoot__menu" v-if="store.isMobile">
        <div class="appRoot__line appRoot__line--uno"></div>
        <div class="appRoot__line appRoot__line--dos"></div>
        <div class="appRoot__line appRoot__line--tres"></div>
      </div>
      <nav class="appRoot__navigation" v-if="showNav">
        <RouterLink class="appRoot__link" to="/">Home</RouterLink>
        <RouterLink class="appRoot__link" to="/about">About</RouterLink>
      </nav>
    </header>
  </div>
  <RouterView></RouterView>
</template>

<style scoped>
.appRoot__navigation {
  display: flex;
  justify-content: space-between;
  width: 120px;
  margin: auto;
}

.appRoot__line {
  height: 4px;
  width: 25px;
  background-color: blue;
  margin: 3px 0;
  cursor: pointer;
}
</style>