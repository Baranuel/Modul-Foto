<template>
  <div class="gallery w-9/12 mx-auto">
    <div class="container">
      <div class="imageContainer col-span-1">
        <img :src="imageTest" alt="" />
      </div>
   
        <div class="grid">
            <div class="gridItem"> <img :src="imageTest" alt="" /></div>
             <div class="gridItem"> <img :src="imageTest" alt="" /></div>
              <div class="gridItem"> <img :src="imageTest" alt="" /></div>
        </div>

    </div>
  </div>
</template>

<script>
import image from "../assets/logo.png";
const Masonry = require('masonry-layout')


window.onload = () =>{
    const grid = document.querySelector('.grid')
    const masonry = new Masonry(grid)
}

export default {
  data() {
    return {
      imageTest: image,
    };
  },
};

</script>

<style scoped>

.container{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-rows: 1fr 2fr;
    grid-gap: 1rem;
    grid-auto-flow: dense;
}

.imageContainer{
    height: 300px;
}

img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

</style>