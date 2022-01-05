<template>
  <div>
        {{$route.params.id}}
        <img :src="'./assets/' + specificProduct.headline" alt="">
        

  </div>
</template>

<script>
import products from '../data/products'

export default {
    name:"Product",
    components:{ }, 
    data(){
        return{
            products,
            currentProduct:{},

        }
    },
    computed:{
        specificProduct(){
                 return this.products.find(product => product.id == this.$route.params.id)
        }
    },
    methods:{  
    },
    beforeMount(){
        this.currentProduct = this.specificProduct 
    }

}
</script>

<style>

</style>