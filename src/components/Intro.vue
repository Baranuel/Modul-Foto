<template>
<div class="mb-28">
<div class="w-9/12 mx-auto">
  <h1 class="headline-large">{{ title }}</h1>
  <div class="flex gap-x-36">
<div class="w-4/12">

</div>
<img class="object-contain w-7/12 h-96" :src="require('/public/assets/' + introImg)"/>
</div>
</div>
</div>
</template>

<script>
export default {
name: 'Intro',
props:
['title', 'subtitle', 'introText', 'introImg']
}
</script>

<style>


</style>