<template>
  <div class="container mt-4">
    <div class="row">
      <div class="list-group" id="list-tab" role="tablist">
        <button
          class="btn btn-dark list-group-item list-group-item-action"
          @click="filtro('Alimentos')"
        >
          Alimentos
        </button>
        <button
          class="btn btn-dark list-group-item list-group-item-action"
          @click="filtro('Juguetes')"
        >
          Juguetes
        </button>
        <button
          class="btn btn-dark list-group-item list-group-item-action"
          @click="filtro('Gatos')"
        >
          Gatos
        </button>
        <button
          class="btn btn-dark list-group-item list-group-item-action"
          @click="filtro('Perros')"
        >
          Perros
        </button>
        <button
          class="btn btn-dark list-group-item list-group-item-action"
          @click="filtro('Medicamentos')"
        >
          Medicamentos
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "Category",
  setup() {
    const store = useStore();

    const filtro = (category) => {
      store.dispatch("filtrarProducts", category);
    };

    return { filtro };
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>