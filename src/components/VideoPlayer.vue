<template>

<div class="videoWrapper">
    <div class="texttest w-9/12 mx-auto font-quicksand">
    <div class="textWidth lg:text-6xl sm:text-2xl md:text-6xl xl:text-6xl">
        Photographs that create smiles and memories
    </div>
    </div>
    <div class="arrowWrap w-100">
    <img  src="../assets/up-arrow.png" alt="">
    </div>
    <video autoplay muted loop>
      <source :src="mp4" type="video/mp4">
    </video>
</div>
</template>

<script>
export default {
  name: "Video",
  props: {
    mp4: String
  }
}
</script>

<style>

.arrowWrap{
    position: absolute;
    top: 80%;
    z-index: 98;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.videoWrapper img {
 
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(298deg) brightness(102%) contrast(102%);
  transform: rotate(180deg);
  width: 50px;
  }

video{
    height: 100vh !important;
    width: 100%;
    object-fit: cover;
    filter: brightness(50%);
}

.videoWrapper{
    display: flex;
    justify-content: center;
    position: relative;
}

.texttest{
    text-align: left;
    color: white;
    position: absolute;
    top: 30%;
    z-index: 98;
    font-weight: 400;
}

.textWidth{
    max-width: 380px;
}

</style>