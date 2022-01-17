<template>
  <Video :mp4="require(`../assets/modulFoto1080v2.mp4`)" />
 
  <section id="middle" class="relative w-9/12 mx-auto scroll-mt-8">
    <h1 id="scrollhere" tabindex="-1" class="headline-large text-center">What we do</h1>
      <img :src="heart" alt="" class="w-12 absolute top-0 right-80 opacity-60">
    <p class="paragraph-text text-center">
      We create memories which will last forever.
    </p>
 
    <div class="flexWrapper my-48 justify-center">
      <div class="flexItem controllablePadding">
        <h2 id="helperTest" tabindex="-1" ref="mydiv" class="headline-regular">Institutions</h2>
        <p class="paragraph-text max-w-prose">
          We are a team of great people who love to spend time with children. We
          organize and conduct a photography sessions at your <span class="font-bold">school,
          kindergarten</span> or other child institutions.
        </p>
        <router-link class="buttonRed my-6 hover:bg-hvrRed" to="/Institutions">Explore</router-link>
      </div>
      <div class="controllablePadding">
        <h2 class="headline-regular">Studio</h2>
        <p class="paragraph-text max-w-prose">
          We are situated in Copenhagen where we have our studio.We offer
          <span class="font-bold"> family, proffessional</span> and <span class="font-bold">passport photos</span>. Just bring what you want
          and let us take care of everything!
        </p>
          <router-link class="buttonRed my-6 hover:bg-hvrRed" to="/Studio">Explore</router-link>
      </div>
     
    </div>

  </section >
  
  <section  class="w-9/12 mx-auto">
  <h3  class="headline-large text-center">Our work</h3>
    <p class="paragraph-text text-center mb-16">
      We want to help you create unforgettable moments and share them with the world
    </p>
  </section>

    <Gallery/>
   <ReachOut/>


</template>

<script>
// @ is an alias to /src

import svg from '../assets/galleryImages/AssetHeart.svg'
import Video from "../components/VideoPlayer.vue";
import Gallery from "../components/Gallery.vue";
import ReachOut from "../components/ReachOut.vue";


export default {
  components: {
    Video,
    Gallery,
    ReachOut,
  },
  data(){
    return{
      heart:svg,
      
    }
  },
   methods: {
     testFunction(){
       this.imref.focus();
     }
   },

  mounted() {
   console.log('mydiv = ' + this.$refs.mydiv)
    console.log(this.$refs)
    this.imref = this.$refs.mydiv;
  },

};

</script>

<style scoped>

#middle{
  scroll-margin: 80px;
}

.controllablePadding{
  padding: 2rem clamp(2rem, 5.5vw, 10rem); 
}

.flexWrapper {
  display: flex;
}

.flexItem{
  border-right: #BB2323 2px solid;
}

.flexWrapper p{
  max-width: 400px;
}

@media only screen and (max-width: 990px) {

.flexWrapper{
  flex-direction: column;
}
  .flexItem {
    border-right: none;
    border-bottom: red 1px solid;
  }
  .controllablePadding{
    padding: 2rem 0;
  }
}


</style>