<template>
<Intro title="Studio"/>
<OurProcess/>
<VideoSections/>

</template>

<script>
import Intro from '../components/Intro.vue'
import OurProcess from '../components/OurProcess.vue'
import VideoSections from '../components/VideoSections.vue'

export default {
    name:'Studio',
    components:{
               Intro,
               OurProcess,
               VideoSections
               }
}
</script>