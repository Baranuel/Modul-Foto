<template>
        <div>
              <img :src="'./assets/' + product.headline" alt="" class="h-52 w-60 object-fill object-center">

        </div>
</template>

<script>

export default {
    name:'Picture',
    props:["url","product"]
}

</script>

<style>

</style>