<script setup>
</script>

<template>
  <header>
  <h1>Welcome!</h1>

 <nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/multiplication-table">Multiplication Table</router-link>
 </nav>
  </header>

  <section class="page-content">
    <router-view></router-view>\

  </section>

  <router-view />
</template>


<style scoped>
section.web-app-container {
  max-width: 80%;
  border: 1px solid black;
  margin: 0 auto;

    section.page-content {
      background-color: lightgray;
    }
}

</style>
