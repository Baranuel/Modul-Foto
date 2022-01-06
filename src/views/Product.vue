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
            <p class="ml-2">{{currentBundle}}</p>
            <div class=" flex flex-col ml-3" >
                <button @click="selectBundle()" v-for="bundle,index in bundles" :key="index">{{bundle.name}}</button>
            </div>
            </div>
            <div class=" w-9/12 mx-auto px-8 my-4  bg-red-100 flex " v-for="bundle, index in bundles" :key="index">
            <div class="w-1/3 flex">
        <Picture class=" self-center h-5/6 w-full " :picture="specificProduct"/>
            </div>
        <div class="p-4 flex flex-col justify-center mx-auto ">
            <h1 class="text-4xl my-4 font-maitree ">{{bundle.name}}</h1>
            <ul v-for="desc, index in bundle.description" :key="index" class=" px-8">
                <li class="font-maitree"> <strong>{{desc}}</strong></li>
            </ul>
            <h2 class="my-2 px-8">View picture</h2>
            <div class="flex w-full justify-between">
                <div class="px-8">
                    <h1>Price</h1>
                    <h1>{{bundle.price}} Kr. </h1>
                </div>
                <div class="">
                    <h1>Quantity</h1>
                <button>BUY</button>
                </div>
            </div>
        </div>
            </div>
        </div>
  </div>
</template>

<script>
import data from '../data/products'
import User from '../components/User.vue'
import Divide from '../components/Divide.vue'
import Picture from '../components/Picture.vue'
export default {
    name:"Product",
    components:{ User,
                Divide,
                Picture
    }, 
    data(){
        return{
            data,
            photos:[],
            currentProduct:{},
            currentUser:"",
            bundles:[],
            currentBundle:"2022 Standard package",

            SelectedBundle:{}

        }
    },
    computed:{
        specificProduct(){
                 return this.photos.find(photo => photo.pictureId == this.$route.params.id)
        },
        specificUser(){
            return this.data.find(user => user.name == this.$route.params.name )
        },
        findBundle(){
            return this.bundles.find(bundle => bundle.name == this.currentBundle)
        }
    },
    methods:{
        selectBundle(){
           console.log(this.selectedBundle =this.target)
        }
    },

    beforeMount(){
        this.currentUser = this.specificUser
        this.photos = this.currentUser.photos
        this.currentProduct = this.specificProduct
        this.bundles = this.currentProduct.bundles
        this.selectedBundle = this.findBundle
        console.log(this.bundles)
        console.log(this.findBundle)

    }


}
</script>

<style>

</style>