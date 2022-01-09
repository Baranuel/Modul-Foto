<template>
        <div>
              <img :src="'./assets/' + picture.headline" alt="" class=" h-full object-fill object-center">
        </div>
</template>

<script>

export default {
    name:'Picture',
    props:["url","picture"]
}

</script>

<style>

</style>