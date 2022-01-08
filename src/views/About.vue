<template>

<Intro title="About us"/>
<StaffSectionAboutPage/>
</template>

<script>

import Intro from '../components/Intro.vue'
import StaffSectionAboutPage from '../components/StaffSectionAboutPage.vue'

export default {
  name:'About',
    components:{
               Intro,
               StaffSectionAboutPage,

               }
}
</script>