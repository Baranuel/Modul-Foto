<template>
  <div class="text-left p-4" >
  <h3>id: {{user.id}}</h3>
  <h1>name: {{user.name}}</h1>
  </div>
</template>

<script>
export default {
    name:"user",
    props:["user"],

    data(){
        return{
            
        }
    },
    beforeMount(){
    }
}
</script>

<style>

</style>