<template>
     <div class="box bg-white rounded-b-sm">
      <div class="imageContainerStaff">
        <img class="w-full h-96  object-cover object-top rounded-t-sm" :src="require('/public/assets/' + filename)" :alt="(name)"/>
      </div>
      <h4 class="headline-process text-left text-black my-4 pt-2 px-6">{{ name }}</h4>
      <p class="paragraph-text text-lg px-6 pt-1 pb-4">
      <slot>
          
      </slot>
      </p>
    </div>
</template>

<script>
export default {
    name: 'Staff',
    props: ['name', 'filename']
}
</script>

<style>

</style>