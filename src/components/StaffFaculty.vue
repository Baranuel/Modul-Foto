<template>
<div class="mb-14 my-28">
<div class="w-9/12 mx-auto">
  <div class="flex gap-x-36">
<div class="w-4/12">
  <h2 class="headline-regular mb-8">Staff/Faculty</h2>
  <p class="border-l-2 border-red-500 py-2 px-6 paragraph-text">Finally we know how great of a collegues you have and if you would like to keep remembering the best of times with them,
we have exactly what you need.</p>
</div>
<img class="object-cover w-1/2 h-96" :src="require('/public/assets/32.png')"/>
</div>
</div>
</div>
</template>

<script>
export default {
name: 'Intro',
props:
['title']
}
</script>

<style>


</style>