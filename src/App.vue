<script setup>
import { ref } from "vue";
import { useStore } from "./store";
import MenuHamburguer from "./components/MenuHamburguer.vue";
import NavMenu from "./components/NavMenu.vue";
import Alert from "./components/Alert.vue";

const store = useStore();
const showNav = ref(!store.isMobile);
const toggleMenuHamburger = ref(null);

store.$subscribe(() => {
  showNav.value = !store.isMobile;
});

function toggleMenu(fromItem) {
  if (store.isMobile) {
    showNav.value = !showNav.value;
    if (fromItem) toggleMenuHamburger.value = new Date().toISOString();
  }
}
</script>

<template>
  <div class="appRoot">
    <header class="appRoot__header">
      <MenuHamburguer
        class="appRoot__menu"
        v-if="store.isMobile"
        :isOpen="toggleMenuHamburger"
        @open-menu="toggleMenu"
      ></MenuHamburguer>
      <Transition name="nav">
        <NavMenu v-if="showNav" @clickItem="toggleMenu(true)"></NavMenu>
      </Transition>
    </header>
  </div>
  <div class="loader" v-if="store.isLoadingWC"></div>
  <RouterView v-else></RouterView>
  <Alert :is="store.hasAlert" :title="store.alert.title" :msg="store.alert.msg"></Alert>
</template>

<style>
.appRoot__header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  box-shadow: 2px 2px 5px #fff;
  position: relative;
  z-index: 100;
}
.appRoot__menu {
  z-index: 101;
}
.nav-enter-active,
.nav-leave-active {
  transition: opacity 500ms ease-in-out;
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
}
</style>