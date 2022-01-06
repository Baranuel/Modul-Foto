<template>
  <div>
        {{$route.params.id}}
        <img :src="'./assets/' + specificProduct.headline" alt="">
        

  </div>
</template>

<script>
import data from '../data/products'

export default {
    name:"Product",
    components:{ }, 
    data(){
        return{
            data,
            photos:[],
            currentProduct:{},

        }
    },
    computed:{
        specificProduct(){
                 return this.photos.find(photo => photo.pictureId == this.$route.params.id)
        }
    },
    methods:{  
        importData(){
        for(let i=0; i<this.data.length; i++){
           this.photos = this.data[i].photos
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