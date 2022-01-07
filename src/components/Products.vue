<template>
<div class="  w-9/12 flex flex-col justify-center items-center mx-auto my-8">
        <h1 class="self-start font-maitree text-4xl p-4">Your Pictures</h1>
  <div class="grid  w-9/12 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-rows-auto gap-4 gap-y-6 m-6" >
      <div v-for="picture in photos" :key="picture.pictureId"
        class="  bg-gray-400 justify-self-center shadow-xl customShadow"
        >
        <div class=" ">
            <router-link :to="`${user.name}/product/${picture.pictureId}`">
            <Picture :picture="picture"/>
            </router-link>
        </div>

        
      </div>
  </div>
        <Divide/>

        <div v-show="classPhotos">
        <div  class="text-left w-full flex">
            <h1 v-if="classPhotos" class=" font-maitree text-4xl p-4">Class photos</h1>
        </div>
            <div class="grid  w-9/12 xl:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 mx-auto  grid-rows-auto gap-4 gap-y-6 m-6" >
      <div v-for="photo,i in classPhotos" :key="i"
        class="  shadow-xl justify-self-center "
        >
        <div class=" bg-white p-8 flex flex-col">
            <img :src="`./assets/` + photo.headline " alt="">
            <div class>
                <h1 class="p-4"> <strong>{{photo.name}}</strong></h1>
                <h3 class="px-4">view Picture</h3>
                <div class="flex flex-row justify-between p-4 mt-4" >
                <div class="self-end" >
                    <h1 class="text-2xl">Price</h1>
                    <h1 class="text-2xl" >{{photo.price}}Kr.</h1>
                </div>
                <div>
                    <h1>quiantity</h1>
                    <Button/>
                </div>
                </div>
            </div>
        </div>

        
      </div>
  </div>
        </div>
</div>
</template>

<script>


import Picture from './Picture.vue'
import Divide from './Divide.vue'
import Button from '../components/Button.vue'

export default {
    name:'Products',
    props:["user"],
    components:{
        Button,
        Picture,
        Divide
    },
    data(){
        return{

            photos:[],
            classPhotos:[]
        }
        
    },
    computed:{
        createPhotos(){
            return this.user.photos
        },
        createClassPhotos(){

                return this.user.classPhotos
        },

    },
    beforeMount(){
        this.photos = this.createPhotos
        this.classPhotos = this.createClassPhotos
        console.log(this.classPhotos)
    }

}
</script>

<style>
.customShadow{
    transition: all .155s ease;
}
.customShadow:hover{
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: -2px 2px 9px 1px rgb(110, 109, 109);
}

</style>