<template>
            <div class="flexContainer">
              <div class="tabsTextContainer">
                <h4 class="headline-regular">{{ title }}</h4>
                <p class="paragraph-text">{{ description }}</p>
                <slot></slot>
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  height: 300px;
  border-right: red 1px solid;
}

.tabsImageContainer{
 width: 60%;
padding: 2rem 0 2rem 2rem;
}

.tabsImageContainer img {
  max-height: 500px;
  width: 100%;
  object-fit: cover;
  max-width: 500px;

}

.tabs-component-tab-a {
  font-family: "Lora", serif;
  font-size: 20px;
  margin-right: 2rem;
}
.tabs-component{
  padding: 3rem 0;
  
}

.tabs-component-tabs{
  display: flex;
}

.is-active a{
  border-bottom: var(--main-red-color) solid 1px;
  color: var(--main-red-color);
}

.tabs-component-tabs a {
  padding-bottom: 0.2em;
}

@media only screen and (max-width: 900px) {

.flexContainer{
  flex-direction: column;
}
.tabsTextContainer{
 border-bottom: red 1px solid;
 border-right: none;
 width: 100%;
}
.tabsImageContainer{
 width: 100%;
padding: 0;
}



}

</style>