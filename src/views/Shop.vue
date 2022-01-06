<template>
  <div class="">

      <User/>
      <Divide/>
      <Products :photos="photos"/>
  </div>
</template>

<script>
import Products from '../components/Products.vue'
import Divide from '../components/Divide.vue'
import User from '../components/User.vue'
import data from '../data/products'
export default {
    name:'Shop',
    components:{
               Divide,
               Products,
               User
               },
    data(){
        return {
            data,
            users:[]
        }
    },
    methods:{
    importData(){
        for(let i=0; i<this.data.length; i++){
           this.photos = this.data[i].photos
            this.users = this.data[i]
        }
    }
    },

    beforeMount(){
        this.importData()
    }


}
</script>

<style>

</style>