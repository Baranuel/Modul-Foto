<template>
<div class="h-64 bg-gray-100 w-9/12 mx-auto mt-8 flex flex-row justify-center items-center">
      <div id="active" class="" v-for="user in data" :key="user.id">

          <User :user="user" class="text-left p-4 m-4 border border-red-300"/>

      </div>
      </div>
</template>

<script>
import data from '../data/products'
import User from '../components/User.vue'
export default {
    name:"Login",
    components:{
        User
    },
data(){
        return{
            data
        }
    },
}
</script>

<style>

#active a.router-link-exact-active {
  color: var(--main-red-color);
  border-bottom: 1px solid var(--main-red-color);
}
</style>