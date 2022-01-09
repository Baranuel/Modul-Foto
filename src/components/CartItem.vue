<template>
  <div class="flex shadow-lg justify-center items-center mx-8 my-2 p-6 relative">
      <div>
          <img :src="`./assets/`+ product.url" alt="" class="w-16 h-16 object-fill">
      </div>
      <div class="flex flex-col flex-1">
          <div class="flex  justify-between">
      <h1 class="ml-4"><strong>{{product.name}}</strong></h1>
        <i @click="removeFromCart()" class="  fas fa-times hover: cursor-pointer"></i>
          </div>
      <div class="flex justify-between pt-4">
          <h2 class="ml-4">Qty</h2>
      <h2>{{product.quantity}}</h2>
      </div>
      <div class="flex justify-between">
          <h2 class="ml-4">Price</h2>
      <h2><strong>{{product_cost}}</strong></h2>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"CartItem",
    props:["product"],
    computed:{

       
        product_cost(){
            return this.product.price * this.product.quantity
        }
    },
    methods:{
        removeFromCart(){
            this.$store.commit('removeFromCart', this.product)
        }
    },
}
</script>

<style>

</style>