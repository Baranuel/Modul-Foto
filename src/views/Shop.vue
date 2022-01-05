<template>
  <div class="">
      <User/>
      <Divide/>
      <Products/>
  </div>
</template>

<script>
import Products from '../components/Products.vue'
import Divide from '../components/Divide.vue'
import User from '../components/User.vue'
export default {
    name:'Shop',
    components:{
               Divide,
               Products,
               User
               },
    data(){
        return {


        }
    },


}
</script>

<style>

</style>