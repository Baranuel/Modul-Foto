<template>
            <div class="flexContainer">
              <div class="tabsTextContainer">
                <h4 class="headline-regular">{{ title }}</h4>
                <p class="paragraph-text">{{ description }}</p>
              </div>
              <div class="tabsImageContainer">
                  <img :src="require('../assets/tabsImages/' + filename)">
              </div>
            </div>
</template>

<script>
export default {
    name: 'Tabz',
    props: ['title', 'description', 'filename']
}
</script>

<style>

.flexContainer{
  display: flex;
  width: 100%;
  margin: 2rem 0;
  gap: 2rem;
  align-items: center;
}

.tabsTextContainer{
  width: 30%;
  border-right: red 1px solid;
}

.tabsImageContainer{
  width: 60%
}


.tabs-component-tab-a {
  margin-right: 2rem;
}
.tabs-component{
  padding: 3rem 0;
  
}

.tabs-component-tabs{
  display: flex;
}

.is-active a{
  border-bottom: rgb(255, 40, 40) solid 1px;
}

.tabs-component-tabs a {
  padding-bottom: 0.2em;
}



</style>