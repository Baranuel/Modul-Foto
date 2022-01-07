<template>
            <div class="flexContainer">
              <div class="tabsTextContainer">
                <h3>{{ title }}</h3>
                <p>{{ description }}</p>
              </div>
              <div class="tabsImageContainer">
                  <img src="" alt="">
              </div>
            </div>
</template>

<script>
export default {
    name: 'Tabz',
    props: ['title', 'description', 'url']
}
</script>

<style>

</style>