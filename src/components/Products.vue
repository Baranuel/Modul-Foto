<template>
<div class=" bg-red-100  w-9/12 flex flex-col justify-center items-center mx-auto ">
        <h1 class="self-start ml-36">Your Pictures</h1>
  <div class="grid  w-8/12 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-rows-auto gap-4 gap-y-6 m-6" >
      <div v-for="picture in photos" :key="picture.pictureId"
        class="  bg-gray-400 justify-self-center customShadow"
        >
            <router-link :to="`/product/${picture.pictureId}`">
            <Picture :picture="picture"/>
            </router-link>
      </div>
  </div>
</div>
</template>

<script>


import data from '../data/products'
import Picture from './Picture.vue'


export default {
    name:'Products',
    components:{
        Picture
    },
    props:["photos"],
    data(){
        return{
            data,
        }
        
    },

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