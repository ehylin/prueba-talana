<template>
  <div>
    <Navbar />
    <div class="row">
      <div class="col-3">
        <Category />
      </div>
      <div class="col-9">
        <Productslist />
      </div>
    </div>
  </div>
</template>

<script>
import Productslist from "./components/Productslist.vue";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
export default {
  name: "App",
  components: { Productslist, Navbar, Category },
};
</script>

<style>
</style>
