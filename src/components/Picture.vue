<template>
        <div>
          <router-link :to="`/products/${product.id}`">
              <img :src="'./assets/' + product.headline" alt="" class="h-52 w-60 object-fill object-center">
          </router-link>
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