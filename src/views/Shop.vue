<template>
  <div class="">
      <div class="h-64 bg-gray-100 w-9/12 mx-auto mt-8 flex flex-col text-left justify-between ">
        <User :user="currentUser"/>
          <p class="p-4">Choose a picture from the ones shown below and select the size you'd like to buy</p>
       </div>
      <Divide/>
      <Products :user="currentUser"/>
  </div>
</template>

<script>
import Products from '../components/Products.vue'
import Divide from '../components/Divide.vue'
 import User from '../components/User.vue'
import data from '../data/products'
export default {
    name:'Shop',
    components:{
               Divide,
               Products,
  User
               },
    data(){
        return {
            data,
            users:[],
            photos:[],
            currentUser:{}
        }
    },
        computed:{
        User(){
                 return this.data.find(user => user.id == this.$route.params.id)
        }
        },
    methods:{
   
    },
    beforeMount(){
        this.currentUser = this.User

        console.log(this.data)
        console.log(this.currentUser)
    }

}
</script>

<style>
#active a.router-link-exact-active {
  color: var(--main-red-color);
  border-bottom: 1px solid var(--main-red-color);
}
</style>