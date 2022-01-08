<template>
  <div class="gallery w-9/12 mx-auto">
        <div class="container grid-rows-3">
            <div class="gridItem"> <img :src="totalImage" alt="" /></div>
            <div class="gridItem md:row-span-2"> <img :src="portrait" alt="" /></div>
            <div class="gridItem md:row-span-2"> <img :src="posingGirl" alt="" /></div>
            <div class="gridItem md:row-span-2"> <img :src="posingGuy" alt="" /></div>
            <div class="gridItem md:col-span-2"> <img :src="totalImage" alt="" /></div>
        </div>
  </div>
</template>

<script>



export default {
  data() {
    return {
      imageTest: image,
      totalImage: totalImage,
      portrait: portrait,
      posingGirl: posingGirl,
      posingGuy: posingGuy
    };
  },
}; 

</script>

<style scoped>

.container{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr) );
    grid-template-rows: repeat(3, 250px);
    grid-gap: 1rem;
    grid-auto-flow: dense;
}

img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

@media only screen and (max-width: 800px) {
  .container{
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
  }
}

</style>