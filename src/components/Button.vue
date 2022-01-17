<template>
  <div>
        <button class="bg-mainRed text-white py-2 px-10 hover:bg-hvrRed focus:bg-hvrRed focus:scale-110 monkey">Buy</button>
  </div>
</template>

<script>
export default {
  name:"Button"

}
</script>

<style >

.monkey:focus{
      outline: rgb(12, 117, 255) 3px solid;
      background: #991c1c;
      transform: scale(1.1);
}

</style>