<template>
  <div class=" bg-red-100 w-9/12 h-96 grid grid-cols-4 grid-rows-2 gap-2  mx-auto">
      <div v-for="headline in headlines" :key="headline.id" :src="  headline.headline" class=" h-full w-full  bg-gray-400">
          <h1>{{headline.id}}</h1>
      </div>
  </div>
</template>

<script>
import headlines from '../data/products'
export default {
    name:'Products',
    components:{},
    data(){
        return{
            headlines
        }
    }
}
</script>

<style>

</style>