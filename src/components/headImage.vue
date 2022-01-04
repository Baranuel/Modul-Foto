<template>
  <img :src="`./assets/${url}`" :alt="url">
</template>

<script>

export default {
    name:'headImage',
    props:{
        url:String
    }
}
</script>

<style>

</style>