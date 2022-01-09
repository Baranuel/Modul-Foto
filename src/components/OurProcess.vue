<template>

<div v-if="this.$route.name === 'Studio'" class="grey-section pt-16 ">
<h2 class="ourprocess-title">Our Process</h2>
<div class="w-10/12 mx-auto flex flex-wrap flex-row justify-center py-10">

<div class="bg-white my-4 w-80   mx-2 shadow-md flex flex-col justify-center items-center">
    <i class="my-6  fas fa-phone fa-4x"></i>
    <h3 class="headline-process">INFORMATION</h3>
    <div class="h-1 w-1/2 border-b-2 border-red-400 mx-auto mb-8"></div>
    <p class="mx-8 mb-4 paragraph-text-cards  ">Reach out to us. call us or send us an email and we will set up a date fro you.</p>
</div>

<div class="bg-white my-4 w-80   mx-2 shadow-md flex flex-col justify-center items-center">
    <i class="my-8  fab fa-wpforms fa-4x"></i>
    <h3 class="headline-process">PHOTOGRAPHY</h3>
    <div class="h-1 w-1/2 border-b-2 border-red-400 mx-auto mb-8"></div>
    <p class="mx-8 mb-8 paragraph-text-cards ">You come to the studio, we will have a session based on what photos you want, we can be very creative when it comes to themes.</p>
</div>

<div class="bg-white my-4 w-80    mx-2 shadow-md flex flex-col justify-center items-center">
    <i class="my-8  fas fa-camera-retro fa-4x"></i>
    <h3 class="headline-process">LOGIN</h3>
    <div class="h-1 w-1/2 border-b-2 border-red-400 mx-auto mb-8"></div>
    <p class="mx-8 mb-8 paragraph-text-cards ">After the session is done you will get the login for our ojnline portal where you can select the pictures you like and buy a digital or physical copy.</p>
</div>

<div class="bg-white my-4 w-80    mx-2 shadow-md flex flex-col justify-center items-center">
    <i class="my-8  fas fa-truck fa-4x"></i>
    <h3 class="headline-process">RETRIEVE</h3>
    <div class="h-1 w-1/2 border-b-2 border-red-400 mx-auto mb-8"></div>
    <p class="mx-8 mb-8 paragraph-text-cards ">After you chose an image, you can pay for them directly on the website and the physical copies will be delivered to yo</p>
</div>

</div>
</div>


<div v-else class="grey-section pt-16 ">
<h2 class="ourprocess-title">Our Process</h2>
<div class="w-10/12 mx-auto flex flex-wrap flex-row justify-center py-10">

<div class="bg-white my-4 w-80  mx-2 shadow-md flex flex-col justify-center items-center">
    <i class="my-8  fas fa-phone fa-4x"></i>
    <h3 class="headline-process">INFORMATION</h3>
    <div class="h-1 w-1/2 border-b-2 border-red-400 mx-auto mb-8"></div>
    <p class="mx-8 mb-8 paragraph-text-cards  ">Get in contact with one of our dedicated photographers. If you are first time clients, we will come out and visit your school.</p>
</div>

<div class="bg-white my-4 w-80  mx-2 shadow-md flex flex-col justify-center items-center">
    <i class="my-8  fab fa-wpforms fa-4x"></i>
    <h3 class="headline-process">PREPARATION</h3>
    <div class="h-1 w-1/2 border-b-2 border-red-400 mx-auto mb-8"></div>
    <p class="mx-8 mb-8 paragraph-text-cards ">Apx. 14 days before the day of photography, you will recieve "Registration form". These must be filled out by the parents and handed to the teachers.</p>
</div>

<div class="bg-white my-4 w-80   mx-2 shadow-md flex flex-col justify-center items-center">
    <i class="my-8  fas fa-camera-retro fa-4x"></i>
    <h3 class="headline-process">PHOTOGRAPHY</h3>
    <div class="h-1 w-1/2 border-b-2 border-red-400 mx-auto mb-8"></div>
    <p class="mx-8 mb-8 paragraph-text-cards ">The class will follow their teacher to our setup at institution. The photographer will shoot every student. If the weather allows it, outdoor class photos can be taken.</p>
</div>

<div class="bg-white my-4 w-80   mx-2 shadow-md flex flex-col justify-center items-center">
    <i class="my-8  fas fa-truck fa-4x"></i>
    <h3 class="headline-process">IMAGES</h3>
    <div class="h-1 w-1/2 border-b-2 border-red-400 mx-auto mb-8"></div>
    <p class="mx-8 mb-8 paragraph-text-cards ">Apx. 4 weeks after the institution will recieve all the ordered images, packed for each class. 
All contact after this will be directly between parents and us (returns, reshootings, etc).</p>
</div>

</div>
</div>

</template>

<script>
export default {
    data(){
        return{

        }
    },
    beforeMount(){
        console.log(this.$route)
    }



}
</script>

<style>

</style>