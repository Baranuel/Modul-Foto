<template>
<Margintop/>
  <h2 class="headline-large w-9/12 mx-auto">Contact information</h2>
  <div class="w-9/12 mx-auto grid grid-cols-3 gap-y-20 gap-x-20 mb-5">
        <div class="flex-inline">
        <h6 class="headline-regular text-black font-medium">Find us here</h6>
        <p class="paragraph-text border-l-2 border-red-500 pl-20">
<b>Modul Foto</b>
<br>
Falkoner Allé 3
<br>
DK-2000 Frederiksberg
<br>
<b>modulfoto@modulfoto.dk</b>
<br><br>
<b>Monday - Tuesday
<br>
09:00-16.00</b>
<br><br>
<b>56 76 12 12</b>
        </p>
        </div>

        <div class="flex-inline">
        <h6 class="headline-regular text-black font-medium">Store location</h6>
        <p class="paragraph-text">
We’re located right between Netto and YouSee on Falkoner Allé 3.
<br><br>
Simply take the elevator to the 6th floor.
        </p>
        </div>

        <img class="object-cover h-96 w-96" :src="require('/public/assets/95.jpg')"/>


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.5764388812895!2d12.531054016068401!3d55.67896530515162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253bc8b4dceff%3A0x9862f5fb6c23d88f!2sFalkoner%20Alle%203%2C%202000%20Frederiksberg!5e0!3m2!1sda!2sdk!4v1641567795026!5m2!1sda!2sdk" width="1400" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</template>

<script>
import Margintop from '../components/margintop.vue'
export default {
        components:{
                Margintop
        }

}
</script>

<style>

</style>