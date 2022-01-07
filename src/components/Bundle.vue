<template>
        <div   class=" w-9/12 mx-auto px-8 my-4 bg-white shadow-xl flex ">
            <div class="w-1/3 flex">
        <img class=" self-center h-5/6 w-full " :src="`./assets/` + bundle.url" />
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
</template>

<script>

export default {
    name:"bundle",
    props:["specificProduct","selectedBundle"],
    watch:{
        selectedBundle: function (){
            this.changeBundle()
        },
    },
    components:{

    },
    data(){
        return{
            bundle:[],
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
            this.bundle = this.bundles.find(bundle => bundle.name === this.selectedBundle)
        }
    },
    beforeMount(){
     this.changeBundle
      this.bundles = this.getBundles
      this.bundle = this.currentBundle
      console.log(this.getCurrentBundle)

    }
}
</script>

<style>

</style>