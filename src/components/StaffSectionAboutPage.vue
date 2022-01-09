<template>
<div class="grey-section py-24">
    <h3 class="headline-regular w-9/12 mx-auto font-bold ">Photographers</h3>
   
  <section class="gridStaff w-9/12 mx-auto ">
    <Staff name="Kasper" filename="Staff-1.jpg">
      Photographer for 9 years at Modul Foto.
      <br /><br />
      Kasper specializes in school photography where he always creates a fun
      environment and ensures top quality photos.</Staff
    >

    <Staff name="Stine" filename="Staff-2.jpg"
      >Photographer for 17 years at Modul Foto. <br /><br />
      Stine always know how to create an fun experience. Her eye for detail and
      charisma always ensures amazing photos.</Staff
    >

    <Staff name="Pernille" filename="Staff-3.jpg">
      Photographer for 7 years at Modul Foto. <br /><br />
      Pernille brings experience and joy. She specializes in working with
      kindergardens and doing family photos at our studio.</Staff
    >
    <Staff name="Anders" filename="Staff-4.jpg"
      >Photographer for 1 year at Modul Foto.<br /><br />Our new rising star
      Anders is a real dynamite of fun. Bringing new ideas and ways of
      interacting.</Staff
    >
</section>
 <h3 class="headline-regular w-9/12 mx-auto font-bold my-8">Office</h3>
<section class="gridStaff w-9/12 mx-auto">


    <Staff name="Ulricha" filename="Staff-5.jpg">
      Customer Service at Modul Foto. <br /><br />
      Ulricha sits at our office and is always ready to help when you
      call!</Staff
    >
    <Staff name="Rajmonda" filename="Staff-6.jpg">
      Customer Service at Modul Foto. <br /><br />

      You will most likely talk to Rajmonda when you call. In addition to great
      service she might provide you a laugh or two.</Staff
    >
    <Staff name="Albert" filename="Staff-7.jpg"
      >Student worker at Modul Foto. <br /><br />
      Albert is studying to become a photographer. On the side he helps guides
      you when you call in.</Staff
    >

    <Staff name="Mathilde" filename="Staff-8.jpg">
      Student worker at Modul Foto. <br /><br />
      Combined with her studies, Mathilde answers your calls, pack orders and
      various tasks from our office.</Staff
    >
  </section>
</div>
</template>

<script>
import Staff from "../components/IndividualStaffMember.vue";

export default {
  name: "Institutions",
  components: {
    Staff,
  },
};
</script>

<style>
.gridStaff {
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.box {
  background-color: rgb(255, 255, 255);
}
</style>