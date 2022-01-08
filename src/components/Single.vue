<template>
<div class=" w-72 px-2 py-6  bg-white m-2 shadow-xl font-maitree  ">
            <div class="">
                <img class="w-full h-72 object-fill" :src="`./assets/` + single.url " alt="">
            <div class>
                <h1 class="px-2 py-2"> <strong>{{single.name}}</strong></h1>
            <div class="flex flex-row justify-between px-2 py-2 mt-4" >
            <div class="self-end" >
                <h3 class="text-gray-500 ">View Picture</h3>
                <h1 class="text-md">Price</h1>
                <h1 class="text-xl" ><strong>{{single.price}}Kr.</strong></h1>
            </div>
            <div class="self-end">
                <h1>quiantity</h1>
                <Button/>
            </div>
            </div>
            </div>
</div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
export default {

    name:"Single",
    props:["single"],
    components:{ Button},
    data(){
        return{
        }
    },
    computed:{
 
    },
    beforeMount(){

        console.log(this.singles)
    }
}
</script>

<style>

</style>