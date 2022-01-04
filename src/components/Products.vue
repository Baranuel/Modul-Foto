<template>
<div class=" bg-red-100  w-9/12 flex justify-center mx-auto ">

  <div class="grid  w-8/12 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-rows-auto gap-4 gap-y-6 m-6" >
      <headImage v-for="headline in headlines" :key="headline.id" :src="'./assets/' + headline.headline" class=" h-52 w-60 object-fill object-center bg-gray-400 justify-self-center customShadow ">
          <h1>{{headline.id}}</h1>
      </headImage>
  </div>
</div>
</template>

<script>
import headlines from '../data/products'
import headImage from './headImage.vue'
export default {
    name:'Products',
    components:{
        headImage
    },
    data(){
        return{
            headlines
        }
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