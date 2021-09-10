<template>
  <div class="card mb-2 mt-4">
    <div class="card-body">
      <p class="text-center">
        <img
          :src="product.photo"
          :alt="`producto-${product.id}`"
          class="img-fluid w-50"
        />
      </p>
      <h5 class="">{{ product.name }}</h5>

      <p class="card-text"></p>
      <p class="card-text">Precio: {{ product.price }}</p>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="fas fa-cart-plus"></i>
      </button>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Producto Agregado
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <img
                  :src="product.photo"
                  :alt="`producto-${product.id}`"
                  class="img-fluid w-50"
                />
              </div>
              <div class="col-6">
                <p>{{ product.name }}</p>
                <p></p>
                <p>Precio: {{ product.price }}</p>
                <p>Cantidad:</p>
                <p>Sub-total:</p>
              </div>
            </div>
            {{ product.description }}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Seguir comprando
            </button>
            <button type="button" class="btn btn-primary">
              Agregar al carro
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>