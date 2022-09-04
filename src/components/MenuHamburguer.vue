<script setup>
import { ref, watch } from "vue";

const menuElement = ref(null);
const emit = defineEmits(["openMenu"]);
const props = defineProps({
  isOpen: { type: String, default: "" },
});
watch(
  () => props.isOpen,
  (newValue) => {
    toggleNav(newValue);
  }
);

function toggleNav(isExtern) {
  menuElement.value.classList.toggle("active");
  menuElement.value.children[1].classList.toggle("active");
  if (!isExtern) emit("openMenu");
}
</script>
<template>
  <div class="menuHamburguer__menu" ref="menuElement" @click="toggleNav()">
    <div class="menuHamburguer__line menuHamburguer__line--uno"></div>
    <div class="menuHamburguer__line menuHamburguer__line--dos"></div>
    <div class="menuHamburguer__line menuHamburguer__line--tres"></div>
  </div>
</template>

<style>
.menuHamburguer__menu {
  cursor: pointer;
}

.menuHamburguer__line {
  height: 4px;
  width: 30px;
  background-color: var(--color_principal_parent);
  margin: 3px 0;
  cursor: pointer;
  transition: transform 600ms ease-in-out;
}

.menuHamburguer__line--dos {
  transition: opacity 0.3s 200ms ease-in-out;
}
.menuHamburguer__line--dos.active {
  transition: opacity 0.3s ease-in-out;
}

.menuHamburguer__menu.active .menuHamburguer__line--uno {
  transform: rotate(-45deg) translate(-25%, 50%);
}
.menuHamburguer__menu.active .menuHamburguer__line--dos {
  opacity: 0;
}
.menuHamburguer__menu.active .menuHamburguer__line--tres {
  transform: rotate(45deg) translate(-25%, -50%);
}
</style>
