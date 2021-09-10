<template>
  <div>
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="text"
        placeholder="Buscar producto"
        aria-label="Search"
        v-model="text"
        @keyup="processInput"
      />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Search",

  setup() {
    const text = ref("");
    const store = useStore();

    const processInput = () => {
      console.log(text.value);
      store.dispatch("filterName", text.value);
    };
    return { text, processInput };
  },
};
</script>

<style lang="scss" scoped>
</style>