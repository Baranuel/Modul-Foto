<template>
        <div   class="  mx-auto px-8 my-4 bg-white shadow-xl flex font-maitree ">
            <div class="w-1/3 flex">
        <img class=" self-center h-5/6 w-full " :src="`./assets/` + product.url" />
            </div>
        <div class="p-4 flex flex-col justify-center mx-auto ">
            <h1 class="text-4xl my-4 font-maitree ">{{product.name}}</h1>
            <ul v-for="desc, index in product.description" :key="index" class=" px-8">
                <li class="font-maitree"> <strong>{{desc}}</strong></li>
            </ul>
            <h2 class="my-2 px-8">View picture</h2>
            <div class="flex w-full justify-between">
                <div class="px-8 self-end">
                    <h1>Price</h1>
                    <h1 class="text-2xl"><strong>{{product.price}} Kr.</strong> </h1>
                </div> 
                <div class="">
                    <Button @click="$emit('view-bundles', product), addBundle()"/>
                </div>
            </div>
        </div>
            </div>
</template>

<script>
import Button from '../components/Button.vue'
export default {
    name:"bundle",
    components:{
        Button
    },
    props:["specificProduct","selectedBundle"],
    watch:{
        selectedBundle: function (){
            this.changeBundle()
        },
    },
    data(){
        return{
            product:[],
            bundles:[],
        }
    },
    computed:{
        getBundles(){
            return this.specificProduct.bundles
        },
        currentBundle(){
                   return this.bundles.find(bundle => bundle.name === "2022 Standard package")

        }

    },

    methods:{
        changeBundle(){
            this.product = this.bundles.find(bundle => bundle.name === this.selectedBundle)
        },

        addBundle(){
            this.$store.commit('addBundle', this.product)
        
    },
    },
    beforeMount(){
     this.changeBundle
      this.bundles = this.getBundles
      this.product = this.currentBundle
      console.log(this.getCurrentBundle)

    }
}
</script>

<style>

</style>