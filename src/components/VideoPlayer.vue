<template>

<div class="videoWrapper">
    <div class="texttest w-9/12 mx-auto font-quicksand">
    <div class="textWidth">
Photographs that create smiles and memories
    </div>
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
    z-index: 99;
    font-size: 46px;
    font-weight: 400;
}

.textWidth{
    max-width: 380px;
}

</style>