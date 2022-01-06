<template>
    <div  class="h-64 bg-gray-100 w-9/12 mx-auto my-16 mt-8 text-left">
    <User :user="currentUser"/>
    <router-link :to="`/user/${currentUser.id}`" class="text-mainRed p-4"> choose different image</router-link>
    </div>
    <Divide/>
  <div class=" bg-gray-100 w-9/12 text-left mx-auto py-0 ">
        <div clas="text-left">
            <h1 class="font-maitree text-4xl p-2">Packages</h1>
            <div class="flex">
            <p class="pl-16 ">select different package:</p>
            <p @click="shown = !shown" class="ml-2 hover: cursor-pointer text-mainRed">{{selectedBundle}}</p>
            <div v-show="shown" class=" flex flex-col ml-3" >
                <button  @click="selectedBundle = bundle.name " v-for="bundle,index in bundles" :key="index">{{bundle.name}}</button>
            </div>
            </div>
            <Bundle :specificProduct="specificProduct" :selectedBundle="selectedBundle"/>
        </div>
  </div>
</template>

<script>
import data from '../data/products'
import User from '../components/User.vue'
import Divide from '../components/Divide.vue'
import Bundle from '../components/Bundle.vue'
export default {
    name:"Product",
    components:{ User,
                Divide,
                Bundle
    }, 
    data(){
        return{
            data,
            photos:[],
            currentProduct:{},
            currentUser:"",
            bundles:[], 
            selectedBundle:"2022 Standard package",
            shown:false

        }
    },
    computed:{
        specificProduct(){
                 return this.photos.find(photo => photo.pictureId == this.$route.params.id)
        },
        specificUser(){
            return this.data.find(user => user.name == this.$route.params.name )
        },
    },
    methods:{
  
    },

    beforeMount(){
        this.currentUser = this.specificUser
        this.photos = this.currentUser.photos
        this.currentProduct = this.specificProduct
        this.bundles = this.currentProduct.bundles


        console.log(this.bundles)

    }


}
</script>

<style>

</style>