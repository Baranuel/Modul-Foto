<template>
<div class=" bg-red-100 w-9/12 flex justify-center mx-auto">

  <div class="grid w-8/12 grid-cols-4 grid-rows-auto gap-3 gap-y-6 m-6" >
      <headImage v-for="headline in headlines" :key="headline.id" :src="'./assets/' + headline.headline" class=" h-44 w-44 object-cover bg-gray-400 justify-self-center">
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

</style>