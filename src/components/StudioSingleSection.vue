<template>
<div class="mb-14 my-28">
<div class="w-9/12 mx-auto">
  <div class="flex gap-x-36">
<div class="w-8/12">
  <h2 class="headline-regular mb-8">Need a passport photo?</h2>
  <p class="border-l-2 border-mainRed py-2 px-6 paragraph-text">No appointment needed!
<br><br>
Just come to the studio, bring your, best official looks, and we’ll be done before you know it,
fully certiffied, free download
</p>
<router-link :to="/Home/"><h4 class="getintouch underline text-left my-12 mx-6">Find us here!</h4></router-link>
</div>
<img class="object-contain w-6/12 h-96" :src="require('/public/assets/38.jpg')"/>
</div>

<div class="h-1 w-1/2 border-b-2 border-mainRed mx-auto my-20"></div>

<div class="flex gap-20">
<div class="w-4/12">
  <h2 class="headline-regular mb-8">Studio Photos</h2>
  <p class="border-l-2 border-mainRed py-2 px-6 paragraph-text">In the studio, we spend 45 minutes taking a series of beautiful photos of your little one. Your child can be quite small, so you are welcome from the time the child is born until the child is approx. half a year.
   <br><br>
We have different blankets to lie on, but feel free to bring your own private things, e.g. own blanket, car, ball or teddy bear.
</p>
</div>

<div class="w-6/12 grid grid-cols-2 gap-x-0 gap-y-4 self-end mx-auto">
<i class="fas fa-map-marker-alt"><h6 class="paragraph-text inline ml-4 font-normal">Falkoner Allé 3 <br> DK-2000 Frederiksberg</h6></i>
<i class="fas fa-phone"><h6 class="paragraph-text inline ml-4">56 76 12 12</h6></i>
<i class="fas fa-envelope"><h6 class="paragraph-text inline ml-4">modulfoto@modulfoto.dk</h6></i>
<i class="fas fa-clock"><h6 class="paragraph-text inline ml-4 inline-flex">Monday - Tuesday: <br> 09:00-16.00</h6></i>
</div>

</div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

i {
  color: #BB2323;
}

h6 {
  color: black;
}

</style>