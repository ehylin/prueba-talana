import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    productsFilter: []
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    setProductsFilter(state, payload) {
      state.productsFilter = payload
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const res = await fetch('http://sva.talana.com:8000/api/product/')
        const data = await res.json()
        //console.log(data)
        commit('setProducts', data)
      } catch (error) {
        console.log(error)
      }
    },
    filtrarProducts({ commit, state }, category) {
      //const filtro = state.products.filter(product => product.category.name === category)
      const filtro = state.products.filter(product =>
        product.category.name.includes(category)
      )
      commit('setProductsFilter', filtro)
    },
    filterName({ commit, state }, text) {
      const textSearch = text.toLowerCase()
      const filtro = state.products.filter(product => {
        const textApi = product.name.toLowerCase()
        if (textApi.includes(textSearch)) {
          return product
        }
      })
      commit('setProductsFilter', filtro)
    }
  },
  modules: {
  }
})
