<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="product in products" :key="product.id">
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "Productslist",
  components: {
    Product,
  },
  setup() {
    const store = useStore();

    const products = computed(() => {
      return store.state.productsFilter;
    });

    onMounted(async () => {
      await store.dispatch("getProducts");
      await store.dispatch("filtrarProducts", "Alimentos");
    });

    return { products };
  },
};
</script>

<style lang="scss" scoped>
</style>