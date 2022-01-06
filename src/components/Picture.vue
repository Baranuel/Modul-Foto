<template>
        <div>
              <img :src="'./assets/' + picture.headline" alt="" class="h-52 w-60 object-fill object-center">

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