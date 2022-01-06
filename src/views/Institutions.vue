<template>
<Intro title="Institutions"/>
<OurProcess/>
<VideoSections/>
<VideoSections/>
<StaffFaculty/>
<Testimonials/>
<ReachOut/>
</template>

<script>
import Intro from '../components/Intro.vue'
import OurProcess from '../components/OurProcess.vue'
import VideoSections from '../components/VideoSections.vue'
import StaffFaculty from '../components/StaffFaculty.vue'
import Testimonials from '../components/Testimonials.vue'
import ReachOut from '../components/ReachOut.vue'

export default {
 name:'Institutions',
    components:{
               Intro,
               OurProcess,
               VideoSections,
               StaffFaculty,
               Testimonials,
               ReachOut
               },
}
</script>