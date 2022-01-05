<template>
  <header role="banner" class="container mx-auto flex py-8 bg-red-100 justify-between items-center">

      <h1>modul foto</h1>
      <nav id="nav" role="navigation">
        <ul class="flex bg-red-100 items-center">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/studio">Studio</router-link></li>
          <li class="p-3 bg-blue-100">
            <router-link to="/user">Login</router-link>
          </li>
        </ul>
      </nav>
  
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-bottom: 3px;
  padding: 0px 3px 3px 3px;
}

#nav a.router-link-exact-active {
  color: var(--main-red-color);
  border-bottom: 1px solid var(--main-red-color);
}
</style>