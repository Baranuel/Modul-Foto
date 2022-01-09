<template>
  <div class="fixed  right-0 top-0 h-screen w-1/5 py-24 bg-white shadow-2xl  ">
      <h1 class="p-4 text-4xl">Your Cart</h1>


      <CartItem 
      v-for="product,i in items" 
      :key="i"
      :product="product"
      />
      <div class=" absolute w-full bottom-0  p-6 border-t-2 border-mainRed  ">
        <div class="flex justify-between">
      <h1>Total:</h1>
      <h1>{{cart_total}}</h1>
        </div>
        <div class="flex justify-end my-2">
        <Button/>
        </div>
      </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue'
import Button from '../components/Button.vue'

export default {
    name:"Cart",
    props:[],
    components:{
      Button,
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