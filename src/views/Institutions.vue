<template>
<Intro title="Institutions" subtitle="Our approach" introImg="70.jpg">
     <p class="border-l-2 border-red-500 py-2 px-6 paragraph-text">
    We love to work with children. It is the enthusiasm they have which makes our work not feel like work at all. <br><br>
We are more than just a photographs, we try to become friends with everyone we meet and that’s what we usually achieve.
  </p>
</Intro>
<OurProcess/>
<VideoSections/>
<div class="w-9/12 mx-auto mt-36 mb-4">
<i class="fas fa-camera-retro fa-2x text-mainRed"><h3 class="headline-process text-left inline ml-4 font-medium">We Offer</h3></i>
</div>
<section class="grey-section">
   <tabs class="w-8/12 mx-auto" :options="{ useUrlFragment: false }">
       
        <tab name="Class photo">
            <Tabz title="Class photo" filename="Classphoto.jpg" ><p class="paragraph-text">A photo of you entire class with your favourite teacher</p></Tabz>     
        </tab>
  
        <tab name="Student book">
            <Tabz title="Student book" filename="Studentbook.jpg" ><p class="paragraph-text">The student book is a common choice for the school and is delivered to all students and staff.
<br><br>
The student book contains all the school's class pictures with the names of all the students</p></Tabz>  
        </tab>

        <tab name="School picture">
            <Tabz title="School picture" filename="SchoolPhoto.jpg" ><p class="paragraph-text">
            See everyone from your school in just one powerful picture</p></Tabz>
        </tab>

                <tab name="Portrait">
            <Tabz title="Portrait" filename="schoolportrait2.jpg" ><p class="paragraph-text">
            Portrait of your children to capture  the best moments and emotions</p></Tabz>
        </tab>

                <tab name="Greeting card">
            <Tabz title="Greeting card" filename="SchoolPhoto.jpg" ><p class="paragraph-text">
            The school can have telegrams and greeting cards printed for use in connection with confirmations and anniversaries.</p></Tabz>
        </tab>
    </tabs>
</section>


<VideoSections2/>
<div class="w-9/12 mx-auto mt-36 mb-4">
<i class="fas fa-camera-retro fa-2x text-mainRed"><h3 class="headline-process text-left inline ml-4 font-medium">We Offer</h3></i>
</div>
<section class="grey-section">
   <tabs class="w-8/12 mx-auto" :options="{ useUrlFragment: false }">
       
        <tab name="Living pictures">
            <Tabz title="Living room picture" filename="hello1.jpg" ><p class="paragraph-text">
We love the beautiful natural light, the green backgrounds and the familiar and safe surroundings outdoors.
<br><br>
Therefore, we always try to take your living room photos outdoors, weather permitting.</p></Tabz>     
        </tab>

        <tab name="Green portraits">
            <Tabz title="Green portraits" filename="hello3.jpg" >
              <p class="paragraph-text">
            We love to take pictures out in the nature!
            <br><br>
            Therefore, we always try to take your living room photos outdoors, weather permitting
            </p></Tabz>
        </tab>

                        <tab name="Common image">
            <Tabz title="Common images" filename="hello4.jpg" ><p class="paragraph-text">
            You can have a common overall picture taken with all children and staff. The total image is developed in a poster size (30x40 or 50x70 cm).</p></Tabz>
        </tab>

                <tab name="Situation photos">
            <Tabz title="Situation photos in spring" filename="hello3.jpg" ><p class="paragraph-text">
            The light, colors and joy of life in spring provide optimal conditions for good pictures. That is why it is in the spring months that we - at the same time as a portrait photography, offer to take our popular situation photos.
<br><br>
 Our photographer plays on the playground and takes pictures from the children's everyday life.
</p></Tabz>
</tab>

    </tabs>
</section>

<StaffFaculty/>
<div class="w-9/12 mx-auto mt-36 mb-4">
<i class="fas fa-camera-retro fa-2x text-mainRed"><h3 class="headline-process text-left inline ml-4 font-medium">We Offer</h3></i>
</div>
<section class="grey-section">
   <tabs class="w-8/12 mx-auto" :options="{ useUrlFragment: false }">
       
        <tab name="Staff portraits">
            <Tabz title="Staff portraits" filename="faculty1.jpg" ><p class="paragraph-text">
You can have portraits taken in connection with ordinary portrait photography.
<br><br>
We take them outside in the natural surroundings.
<br><br>
They are delivered together to the kindergarten/school in either color or black and white - depending on your wishes.</p></Tabz>     
        </tab>

        <tab name="Staff group photo">
            <Tabz title="Staff group photo" filename="faculty2.jpg" >
              <p class="paragraph-text">
         The staff group in the institution can have a joint group photo taken. 
<br><br>
We like to take the picture outdoors. All staff receive a copy.
We like to evoke enlargements to hang up in the kindergarten
            </p></Tabz>
        </tab>

                <tab name="Collague and magnetic board">
            <Tabz title="Collague and magnetic board" filename="32.png" ><p class="paragraph-text">
The collage is specially designed for each school, with a few pictures from the school.
It is delivered ready to hang up once a year. The school staff is by name and title.
<br><br>
The magnetic board is with a glass door and fitted with a lock.
We deliver the staff photos, with name and title, with magnetic back to the school.
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
import VideoSections from '../components/VideoSections.vue'
import VideoSections2 from '../components/VideoSections2.vue'
import StaffFaculty from '../components/StaffFaculty.vue'
import Testimonials from '../components/Testimonials.vue'
import ReachOut from '../components/ReachOut.vue'
import Tabz from '../components/Tabz.vue'

export default {
 name:'Institutions',
    components:{
               Intro,
               OurProcess,
               VideoSections,
               VideoSections2,
               StaffFaculty,
               Testimonials,
               ReachOut,
               Tabz,
               },
}
</script>