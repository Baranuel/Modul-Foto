<template>
  <div class="gallery w-9/12 mx-auto">
        <div class="container grid-rows-3">
            <div class="gridItem"> <img :src="girlPortrait" alt="Portrait of a girl" /></div>
            <div class="gridItem md:row-span-2"> <img :src="portrait" alt="Portrait of a guy" /></div>
            <div class="gridItem md:row-span-2"> <img :src="posingGirl" alt="Girl posing on a bench" /></div>
            <div class="gridItem md:row-span-2"> <img :src="posingGuy" alt="" /></div>
            <div class="gridItem sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2"> <img :src="totalImage" alt="Photographer taking image of entire school" /></div>
        </div>
  </div>
  <div class="w-9/12 mx-auto py-6" >
  <a class="float-right paragraph-text text-mainRed" href="https://www.instagram.com/modulfoto/">See all of our photos</a>
  </div>
</template>

<script>

import image from "../assets/logo.png";
import totalImage from "../assets/galleryImages/schoolTotal.jpg";
import portrait from "../assets/galleryImages/portrait.jpg";
import posingGirl from "../assets/galleryImages/girl.png";
import posingGuy from "../assets/galleryImages/posingGuy.jpg";
import girlPortrait from "../assets/galleryImages/264968279_617805469368625_215291372559676243_n.jpg";

export default {
  data() {
    return {
      imageTest: image,
      totalImage: totalImage,
      portrait: portrait,
      posingGirl: posingGirl,
      posingGuy: posingGuy,
      girlPortrait: girlPortrait
    };
  },
}; 

</script>

<style scoped>

.container{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr) );
    grid-template-rows: repeat(3, 180px);
    grid-gap: 1rem;
    grid-auto-flow: dense;
}

img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    max-height: 400px;
}

@media only screen and (max-width: 800px) {
  .container{
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
  }
}

</style>