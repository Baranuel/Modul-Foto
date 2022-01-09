<template>
  <div class="w-9/12 mx-auto text-center my-32">
      <h4 class="headline-regular text-center mb-0">Reach out</h4>
      <p class="paragraph-text text-center">Let's create memories. Get in touch</p>
       <Divide/>
      <router-link class="buttonRed bg-mainRed hover:bg-hvrRed" to="/Contact">Contact</router-link>
  </div> 
</template>

<script>
import Divide from "../components/Divide.vue";

export default {
  components: {
    Divide,
  }
}
</script>

<style>


</style>