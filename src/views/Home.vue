<template>
  <Video :mp4="require(`../assets/modulFoto1080v2.mp4`)" />
 
  <section class="w-9/12 mx-auto">
    <h1 class="headline-large text-center">What we do</h1>
    <p class="paragraph-text text-center">
      We create memories which will last forever.
    </p>

    <div class="flexWrapper my-48 justify-center">
      <div class="flexItem controllablePadding">
        <h2 class="headline-regular">Institutions</h2>
        <p class="paragraph-text max-w-prose">
          We are a team of great people who love to spend time with children. We
          organize and conduct a photography sessions at your <span class="font-bold">school,
          kindergarten</span> or other child institutions.
        </p>
        <a class="buttonRed my-6" href="">Explore</a>
      </div>
      <div class="controllablePadding">
        <h2 class="headline-regular">Studio</h2>
        <p class="paragraph-text max-w-prose">
          We are situated in Copenhagen where we have our studio.We offer
          <span class="font-bold"> family, proffessional</span> and <span class="font-bold">passport photos</span>. Just bring what you want
          and let us take care of everything!
        </p>
          <a class="buttonRed my-6" href="">Explore</a>
      </div>
     
    </div>

  </section >
  
  <section class="w-9/12 mx-auto">
  <h3 class="headline-large text-center">Our work</h3>
    <p class="paragraph-text text-center my-16">
      We want to help you create unforgettable moments and share them with the world
    </p>
  </section>

    <Gallery/>
   <ReachOut/>

<section class="bg-red-100">
   <tabs class="w-9/12 mx-auto" :options="{ useUrlFragment: false }">
       
        <tab name="School portraits">
            <Tabz title="School portraits" description="Its FUN" />
        </tab>
  
          <tab name="Class photos">
            <Tabz title="Class photos" description="Its HELL FUN" />
        </tab>
  
    
    </tabs>
</section>


</template>

<script>
// @ is an alias to /src

import Video from "../components/VideoPlayer.vue";
import Gallery from "../components/Gallery.vue";
import ReachOut from "../components/ReachOut.vue";
import Tabz from "../components/Tabz.vue"


export default {
  components: {
    Video,
    Gallery,
    ReachOut,
    Tabz,
  },
};

</script>

<style scoped>

.controllablePadding{
  padding: 2rem clamp(2rem, 5.5vw, 10rem); 
}

.flexWrapper {
  display: flex;
}

.flexItem{
  border-right: red 1px solid;
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