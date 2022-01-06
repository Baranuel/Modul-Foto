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
            currentUser:""

        }
    },
    computed:{
        specificProduct(){
                 return this.photos.find(photo => photo.pictureId == this.$route.params.id)
        },
        specificUser(){
            return this.data.find(user => user.name == this.$route.params.name )
        }
    },

    beforeMount(){
        this.currentUser = this.specificUser
        this.photos = this.currentUser.photos
        console.log(this.$route)

    }


}
</script>

<style>

</style>