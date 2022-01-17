<template>
  <header role="banner" class="flex py-3 mainWhite justify-center text-xl font-quicksand headerFixed" :class="{ indexNav: $route.name == 'Home', indexNavScroll:  scrollPosition > 50 & $route.name == 'Home', navScroll: scrollPosition > 50 }">
 
    <div class="contentWrapper flex justify-between items-center w-9/12 mx-auto" >
      <h1 class="font-rufina font-normal">modul foto</h1>
      <nav id="nav" role="navigation">
        <ul class="flex items-center justify-around">

        
          <button @click="goto()">Id</button>
          <button @click="gotoRef()">Refs</button>
          
         
         
          <li><router-link to="/" aria-label="Home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/studio">Studio</router-link></li>
          <li><router-link to="/Institutions">Institutions</router-link></li>
      
          <li><router-link to="/Contact">Contact</router-link></li>
          <li class="">
          <button @click="togglePages" aria-expanded="false">Policy   <i class="fas fa-arrow-down text-base"></i> </button>
            <ul class="dropdownMenu mainWhite" aria-hidden="true" :class="{ dropdownMenuBackground: $route.name == 'Home', displayNone: visible == true ,indexNavScroll: scrollPosition > 50 & $route.name == 'Home' }">
              <li><router-link to="/Gdpr" @click="togglePages">GDPR</router-link></li>
              <li><router-link to="/TOS" @click="togglePages">TOS</router-link></li>
            </ul>
          </li>
          

          <li id="headerLogin" class="px-2 py-1 bg-blue-100 rounded-sm bg-mainRed hover:bg-hvrRed">
            <router-link style="color: white !important" to="/login">Login</router-link>
          </li>
        </ul>
      </nav>
    </div>
 
  </header>
</template>

<script>


export default {

    data() {
    return { scrollPosition: null,
    visible: true,
 
    }
  },
  methods: {
        updateScroll() {
       this.scrollPosition = window.scrollY
    },
  
    togglePages(){
      this.visible = !this.visible
    },
     goto(){
       this.helperTest.focus()
     }

  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>

<style scoped>

.headline-large:focus{
  background-color: blue;
}

.dropdownMenu{
  padding: 0rem 0;
  position: absolute;
  margin: 0 -1rem;
}

.dropdownMenu li{
  margin: 1rem;
}

.dropdownMenuBackground {
  background-color: rgba(29, 29, 29, 0)
}

.displayNone{
  display: none;
}

header{
  transition: background-color 0.3s linear, padding 0.4s ease-in-out;
}

.dropdownMenu{
    transition: background-color 0.3s linear, padding 0.4s ease-in-out;
}

.indexNav{
  position:fixed !important;
  top:0;
  background-color: rgba(0, 0, 0, 0) !important;
  color: white !important;
  font-weight: 400 !important;
}

.indexNavScroll{
  background-color: rgb(29, 29, 29) !important;
}



 

li {
  margin-left: clamp(2rem, 3vw, 3rem); ;
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
}

.headerFixed{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 99;
}
</style>