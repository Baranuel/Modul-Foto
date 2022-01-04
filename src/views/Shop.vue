<template>
  <div class="">
      <Divide/>
      <Products/>
  </div>
</template>

<script>
import Products from '../components/Products.vue'
import Divide from '../components/Divide.vue'
export default {
    name:'Shop',
    components:{
               Divide,
               Products
               },
    data(){
        return {


        }
    },


}
</script>

<style>

</style>