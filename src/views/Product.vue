<template>
    <div  class="h-64 bg-gray-100 w-9/12 mx-auto mt-8 text-left">
    <User :user="currentUser"/>
    <router-link :to="`/user/${currentUser.id}`" class="text-mainRed p-4"> choose different image</router-link>
    </div>
  <div  class="h-64 bg-gray-100 w-9/12 mx-auto mt-8 flex flex-row">
        <img :src="'./assets/' + specificProduct.headline" alt="">
  </div>
</template>

<script>
import data from '../data/products'
import User from '../components/User.vue'
export default {
    name:"Product",
    components:{ User}, 
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