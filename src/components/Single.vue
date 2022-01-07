<template>
<div class="  px-4 py-4  bg-white m-4 shadow-xl font-maitree ">
            <div class="">
                <img class="w-72 h-72 object-contain" :src="`./assets/` + single.url " alt="">
            <div class>
                <h1 class="px-8 py-2"> <strong>{{single.name}}</strong></h1>
            <div class="flex flex-row justify-between px-8 py-2 mt-4" >
            <div >
                <h3 class="text-gray-500 ">View Picture</h3>
                <h1 class="text-md">Price</h1>
                <h1 class="text-xl" ><strong>{{single.price}}Kr.</strong></h1>
            </div>
            <div class="self-end">
                <h1>quiantity</h1>
                <button>Buy</button>
            </div>
            </div>
            </div>
</div>
  </div>
</template>

<script>
export default {

    name:"Single",
    props:["single"],
    components:{},
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