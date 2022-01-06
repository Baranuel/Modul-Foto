<template>
  <header role="banner" class="flex py-8 bg-red-100 justify-center text-xl font-quicksand headerFixed" :class="{ indexNav: $route.name == 'Home' }">
 
    <div class="contentWrapper flex justify-between items-center w-9/12 mx-auto" >
      <h1 class="font-rufina font-normal">modul foto</h1>
      <nav id="nav" role="navigation">
        <ul class="flex items-center justify-around">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/studio">Studio</router-link></li>
          <li id="headerLogin" class="px-2 py-1 bg-blue-100 rounded-sm">
<<<<<<< HEAD
          <router-link to="/user">Login</router-link>
=======
            <router-link to="/login">Login</router-link>
>>>>>>> ad5ff22898140c94195859f06a78ef6358de082f
          </li>
        </ul>
      </nav>
    </div>
 
  </header>
</template>

<script>
export default {
  
};
</script>

<style scoped>


.indexNav{
  background-color: rgba(255, 0, 0, 0) !important;
  color: white !important;
  font-weight: 400 !important;
}

li {
  margin-left: 3rem;
}

header a {
  padding: 0.1rem;
}

#nav a.router-link-exact-active {
  color: var(--main-red-color);
  font-weight: 400;
  box-sizing: content-box;
  border-bottom: var(--main-red-color) 1px solid;
}

#headerLogin{
  color: white !important;
  background-color: red;
}

.headerFixed{
    position: fixed;
    width: 100%;
    z-index: 99;
}
</style>