<template>
 <VueAnnouncer />
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
               },
    mounted() {
    window.addEventListener('scroll', this.updateScroll);
    
   console.log('mydiv = ' + this.$refs.mydiv)
    console.log(this.$refs)
    this.imref = this.$refs.mydiv;
  
  },

     methods: {
     testFunction(){
       this.imref.focus();
     }
   },

               
}
</script>

<style>
@import './assets/variables.css';
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital@0;1&display=swap');
</style>


