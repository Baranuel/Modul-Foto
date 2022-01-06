<template>
<div class="mb-28">
<div class="w-9/12 mx-auto">
  <h1 class="headline-large">{{ title }}</h1>
  <div class="flex gap-x-36">
<div class="w-4/12">
  <h2 class="headline-regular">Our approach</h2>
  <p class="border-l-2 border-red-500 py-2 px-6 paragraph-text">We love to work with children. It is the enthusiasm they have which makes our work not feel like work at all.
We are more than just a photographs, we try to become friends with everyone we meet and that’s what we usually achieve.</p>
</div>
<img class="object-cover w-6/12 h-96" :src="require('/public/assets/93.jpg')"/>
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