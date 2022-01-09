<template>
  <Header/>
  <Margintop v-if="$route.name !== 'Home'" />

 <router-view/>
  <Footer/>
 
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Margintop from './components/Margintop.vue'


export default {
    name:'App',
    components:{
        Header,
        Footer,
        Margintop
               },
               data(){
                 return{

                 }
               },
               beforeMount(){
                 console.log(this.$route)
               }
               
}
</script>

<style>
@import './assets/variables.css';
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital@0;1&display=swap');
</style>


