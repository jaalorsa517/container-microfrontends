<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useStore } from "../store/index";

const store = useStore();
const wcLanding = ref(null);

onMounted(() => {
  wcLanding.value.addEventListener("userSelected", onUserSelected);
});
onUnmounted(() => {
  wcLanding?.value?.removeEventListener("userSelected", onUserSelected);
});

function onUserSelected(e) {
  const [user] = e.detail;
  store.openAlert(
    "Usuario emitido desde el Vue web Component",
    `El usuario ${user.first_name} ${user.last_name} fue seleccionado desde el webComponent y es mostrado en el contenedor.`
  );
}
</script>
<template>
  <wc-landing class="style-extends d-flex-center" limit="20" ref="wcLanding"></wc-landing>
</template>