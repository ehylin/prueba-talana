<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <div class="" id="">
          <form class="d-flex">
            <Search />
            <button type="button" class="btn btn-primary">
              <i class="fas fa-cart-plus"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
  name: "Navbar",
  components: { Search },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>