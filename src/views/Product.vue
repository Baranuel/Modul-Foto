<template>
  <div>
      
  </div>
</template>

<script>
import products from '../data/products'
export default {
    name:"Product",
    data(){
        return{
            products
        }
    },
    methods:{
        call(){
            console.log(12321)
        }
    },
    beforeMount(){
       this.call()
    }

}
</script>

<style>

</style>