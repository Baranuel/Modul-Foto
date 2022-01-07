<template>
    <Video :mp4="require(`../assets/modulFoto1080v2.mp4`)" />
    
</template>

<script>
// @ is an alias to /src

import Video from '../components/VideoPlayer.vue'

export default {

    components:{
        Video,
               }
}
</script>

<style scoped>


</style>