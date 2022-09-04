<script setup>
import { useStore } from "../store/index.js";

const store = useStore();

const props = defineProps({
  title: { type: String, default: "" },
  msg: { type: String, default: "" },
});

const emit = defineEmits(["close"]);
</script>
<template>
  <Transition name="zoomin">
    <section class="alert" v-if="store.hasAlert">
      <div class="alert__content">
        <h2 class="alert__title">{{ props.title }}</h2>
        <p class="alert__msg" v-html="props.msg"></p>
        <div class="alert__btnContainer">
          <button class="alert__btn" @click="store.closeAlert()">Aceptar</button>
        </div>
      </div>
    </section>
  </Transition>
</template>
<style>
.alert {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  backdrop-filter: blur(50px);
}

.alert__content {
  width: 300px;
  min-height: 300px;
  padding: 1.2rem;
  display: grid;
  grid-template-rows: repeat(2, auto) 45px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 8px #ccc;
}

.alert__btnContainer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.alert__btn {
  padding: 10px;
  color: #fff;
  font-size: 0.9rem;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #ccc;
  background-color: var(--color_principal_parent);
  cursor: pointer;
  transition: background-color 400ms ease-in-out;
}
.alert__btn:hover {
  background-color: var(--color_principal_parent_hover);
}
.alert__btn:active {
  transform: scale(0.95);
}

.zoomin-enter-active,
.zoomin-leave-active {
  transition: opacity 500ms ease-in-out;
}

.zoomin-enter-from,
.zoomin-leave-to {
  opacity: 0;
}
</style>
