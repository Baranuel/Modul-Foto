<template>
<Intro title="Studio"/>
<OurProcess/>
<VideoSections/>
<StudioSingleSection/>

</template>

<script>
import Intro from '../components/Intro.vue'
import OurProcess from '../components/OurProcess.vue'
import VideoSections from '../components/VideoSections.vue'
import StudioSingleSection from '../components/StudioSingleSection.vue'

export default {
    name:'Studio',
    components:{
               Intro,
               OurProcess,
               VideoSections,
               StudioSingleSection,
               }
}
</script>