<script setup>
import routes from "../router/routes";
const dicNames = {
  Home: "Inicio",
  Vanilla: "Vanilla",
  Angular: "Angular",
};
const menu = routes.map(({ name, path }) => ({ name: dicNames[name], path }));
const emit = defineEmits(["clickItem"]);
function onClick() {
  emit("clickItem");
}
</script>

<template>
  <nav class="navMenu__navigation">
    <RouterLink
      class="navMenu__link"
      v-for="(menuItem, index) in menu"
      :to="menuItem.path"
      :key="`${menuItem.name}-${index}`"
      @click="onClick"
    >
      {{ menuItem.name }}
    </RouterLink>
  </nav>
</template>

<style>
.navMenu__navigation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 2.5rem;
  background-color: #fff;
}

.navMenu__link {
  display: block;
  letter-spacing: 2px;
}

@media screen and (min-width: 768px) {
  .navMenu__navigation {
    flex-direction: row;
    height: auto;
    position: static;
    top: unset;
    left: unset;
    font-size: 1rem;
    background-color: unset;
  }
}
</style>
