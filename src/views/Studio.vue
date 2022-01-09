<template>
<Intro title="Studio" subtitle="Come to the studio" introImg="69.jpg">
    <p class="border-l-2 border-red-500 py-2 px-6 paragraph-text">
    Book an appointment with us so we can spend some quality time on making sure you leave with the greatest photos possible.
<br><br>
It’s very simple just call us. we set up a meeting and we make magic happen right here at our place.
  </p>
<a class="buttonRed ml-5 mt-10 bg-mainRed" href="">Contact us</a>

</Intro>
<OurProcess/>
<StudioSingleSection/>
<div class="w-9/12 mx-auto mt-36 mb-4">
<i class="fas fa-camera-retro fa-2x text-mainRed"><h3 class="headline-process text-left inline ml-4 font-medium">We Offer</h3></i>
</div>
<section class="grey-section">
   <tabs class="w-8/12 mx-auto" :options="{ useUrlFragment: false }">
       
        <tab name="Family Photography">
            <Tabz title="Family Photography" filename="studio1.jpg" ><p class="paragraph-text">
When all the grandchildren have to get up and hang on grandma's wall!
<br><br>
Or the whole family is gathered for the big Christmas picture?
<br><br>
How about a cousin picture?
<br><br>
Pets are also welcome!</p></Tabz>     
        </tab>

        <tab name="Profile picture">
            <Tabz title="Profile picture" filename="studio2.jpg" >
              <p class="paragraph-text">
            Are you an aspiring actor who needs a few headshots?
            <br>
            You need a profile picture for your newly made CV?
            <br>
            Or maybe you need a profile picture for something else? Dont worry we got you covered!
            </p></Tabz>
        </tab>

                        <tab name="Baby pictures">
            <Tabz title="Baby pictures" filename="studio3.jpg" ><p class="paragraph-text">
            They grow big so fast...
            <br>
            Lets engrave the memory of the first unique and fantastic time with your newborn.
            <br>
            We have a heated studio and alot of props such as chairs, blankts and more!
            </p></Tabz>
        </tab>


    </tabs>
</section>

<Testimonials/>
<ReachOut/>



</template>

<script>
import Intro from '../components/Intro.vue'
import OurProcess from '../components/OurProcess.vue'
import StudioSingleSection from '../components/StudioSingleSection.vue'
import Testimonials from '../components/Testimonials.vue'
import ReachOut from '../components/ReachOut.vue'
import Tabz from '../components/Tabz.vue'

export default {
    name:'Studio',
    components:{
               Intro,
               OurProcess,
               StudioSingleSection,
               Testimonials,
               ReachOut,
               Tabz,
               }
}
</script>