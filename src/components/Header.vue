<template>
  <header role="banner" class="flex py-8 bg-red-100 justify-center text-xl font-quicksand" :class="{ indexNav: $route.name == 'Home' }">
    <div class="contentWrapper  flex  justify-between items-center container mx-4 px-4" >
      <h1 class="font-rufina font-normal">modul foto</h1>
      <nav id="nav" role="navigation">
        <ul class="flex items-center justify-around">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/studio">Studio</router-link></li>
          <li id="headerLogin" class="p-3 bg-blue-100">
            <router-link to="/user">Login</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rufina:wght@400;700&display=swap");

.font-quicksand {
  font-family: "Quicksand", sans-serif;
}
.font-rufina {
  font-family: "Rufina", serif;
}

.indexNav{
  background-color: rgba(255, 0, 0, 0) !important;
  color: white !important;
}

li {
  margin-left: 3rem;
}

#nav a {
  font-weight: 500;
  padding-bottom: 3px;
  padding: 0px 2px 3px 2px;
}

#nav a.router-link-exact-active {
  color: var(--main-red-color);
  border-bottom: 1px solid var(--main-red-color);
}

#headerLogin{
  color: white !important;
  background-color: red;
}

#nav a.router-link-exact-active #headerLogin{
  color: blueviolet;
}
</style>