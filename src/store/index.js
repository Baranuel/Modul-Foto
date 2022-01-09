import { createStore } from 'vuex'

function updateLocalStorage(cart){
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart:[]
  },
  getters: {
    productQuantity: state => product=>{
      const item = state.cart.find(i => i.name   === product.name )

      if(item) return item.quantity
      else return null
    },
    cartItems: state => {
      return state.cart
    }
  },
  mutations:{
    addToCart(state, product){
      let item = state.cart.find(i => i.url  ===  product.url)

      if(item){
        item.quantity++
      }
      else{
        state.cart.push({...product, quantity:1})
      }

      updateLocalStorage(state.cart)
    },
    addBundle(state, bundle){
      let item = state.cart.find(i => i.url  ===  bundle.url)

      if(item){
        item.quantity++
      }
      else{
        state.cart.push({...bundle, quantity:1})
      }

      updateLocalStorage(state.cart)
    },
    removeFromCart(state, product){
      let item = state.cart.find(i => i.name === product.name)

      if(item){
        if (item.quantity > 1){
          state.cart = state.cart.filter( i=> i.name !== product.name)
        }
        updateLocalStorage(state.cart)
      }
    },
    removeBundle(state, bundle){
      let item = state.cart.find(i => i.name === bundle.name)

      if(item){
        if (item.quantity > 1){
          state.cart = state.cart.filter( i=> i.name !== bundle.name)
        }
        updateLocalStorage(state.cart)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
