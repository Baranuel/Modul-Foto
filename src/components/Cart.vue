<template>
  <div class="fixed right-0 top-0 h-screen w-1/5 py-24 bg-white shadow-2xl ">
      <h1 class="p-4">Your Cart</h1>


      <CartItem 
      v-for="product,i in items" 
      :key="i"
      :product="product"
      
      />
      <div class=" p-6">
        <div class="flex justify-between">
      <h1>Total:</h1>
      <h1>{{cart_total}}</h1>

        </div>
      </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue'

export default {
    name:"Cart",
    props:[],
    components:{
        CartItem
    },
    computed:{
        items(){
            return this.$store.getters.cartItems
        },
        cart_total(){
            return this.$store.getters.cartTotal
        }
    }
}
</script>

<style>

</style>