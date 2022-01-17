<template>

<Intro id="scrollhere" tabindex="-1" title="About us" subtitle="Modul Foto" introImg="60.jpg">
  <p class="border-l-2 border-red-500 py-2 px-6 paragraph-text">
    We have taken photos at Modul Foto for over 30 years now.
<br><br>
The most amazing portraits are shot, when technical skills, vibes and expression all meet.
<br><br>
Thats why we have the best equipment in the market, professional photographers who are willing to take the extra step in order for our customers to be happy.

  </p>
</Intro>
<StaffSectionAboutPage/>

<div class="w-9/12 mx-auto mt-20 mb-10">
<h2 class="headline-regular mb-8">Jobs & Careers</h2>
<p class="border-l-2 border-red-500 py-2 px-6 paragraph-text">We are always on the lookout for quality workers!
<br><br>
Below you can see our open positions.
<br><br>
If the position you are interested in, is not listed below, you are welcome to send us an CV with your work at: job@modulfoto.dk</p>
</div>

<section class="w-12/12 mx-auto">
   <tabs class="w-6/12 mx-auto" :options="{ useUrlFragment: false }">
       
        <tab name="Photographer">
            <Tabz title="School photograph: Sjælland/Jylland" filename="job2.jpg" ><p>Are you good with children and do you know how to handle your ISO? Then this is the job for you!
            <br><br>
            You do not need your own vehicle - but a drivers license is a must.
            <br><br>
            Send your application to job@modulfoto.dk</p></Tabz>
            
        </tab>
  
        <tab name="Office">
            <Tabz title="Office Assistant" filename="job3.jpg" ><p>Do you have a flair for IT and a strong sense of organization?
            <br><br>
            We are looking for an educated office assistant for a limited opening - ending in mid December, 2022.
            <br><br>
            The job is 37 hours pr. week. Monday-Friday with shifts between: 08:00 - 18:00.
            <br><br>
            The job is at our office at Falkoner Alle 3, 2000 Frederiksberg.
            Send your application to job@modulfoto.dk</p></Tabz>
            
        </tab>

        <tab name="Student Job">
            <Tabz title="Student job" filename="job1.jpg" ><p>
            We are super busy in August. Therefore we need a hand with servicing our customers on the phone. You will also participate in sorting and packing school photos.
            <br><br>
            We hold interviews in Week 32 (2-6th of August). With the position beginning in Week 33.
            <br><br>
            You will be working from our office at Falkoners Alle 3, Frederiksberg 2000.
            <br><br>
            Send your application to job@modulfoto.dk</p></Tabz>
            
        </tab>
    </tabs>
</section>

<ReachOut/>
</template>

<script>

import Intro from '../components/Intro.vue'
import StaffSectionAboutPage from '../components/StaffSectionAboutPage.vue'
import Tabz from '../components/Tabz.vue'
import ReachOut from '../components/ReachOut.vue'

export default {
  name:'About',
    components:{
               Intro,
               StaffSectionAboutPage,
               Tabz,
               ReachOut,

               }
}
</script>