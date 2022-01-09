<template>
<div class=" w-72 px-2 py-6  bg-white m-2 shadow-xl font-maitree  ">
            <div class="">
                <img class="w-full h-72 object-fill" :src="`./assets/` + product.url " alt="">
            <div class>
                <h1 class="px-2 py-2"> <strong>{{product.name}}</strong></h1>
            <div class="flex flex-row justify-between px-2 py-2 mt-4" >
            <div class="self-end" >
                <h3 class="text-gray-500 ">View Picture</h3>
                <h1 class="text-md">Price</h1>
                <h1 class="text-xl" ><strong>{{product.price}}Kr.</strong></h1>
            </div>
            <div class="self-end">
                <Button @click="$emit('view-singles', product), addToCart()"/>
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
    props:["product"],
    components:{Button},
    data(){
        return{
        }
    },
    methods:{
        addToCart(){
            this.$store.commit('addToCart', this.product)
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