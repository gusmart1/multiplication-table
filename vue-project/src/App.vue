<template>
  <section class="web-app-container">

    <header>
      <h1>Multiplication Table Project</h1>
      <h3>Create your own multiplication table that is rendered with an HTML table!</h3>

      <nav>
        <router-link :to="{ name: 'Home' }">Go to home</router-link>
        <router-link :to="{ name: 'AboutMe' }">About me</router-link>
        <router-link :to="{ name: 'MultiplicationTable' } ">Multiplication Table</router-link>
      </nav>

    </header>

    <section class="page-content">
      <router-view/>
    </section>

    <footer>
      <p>Created by Nik in 2025</P>
    </footer>
  </section>
</template>

<style scoped>
section.web-app-container {
  max-width: 80%;
  border: 1px solid black;
  margin: 0 auto;

  header {
    nav {
      display: flex;
      gap: 15px;
      justify-content: center;
      /* code here would apply to the contents of nav (like the links) */

      a {
        text-decoration: none;

        &.router-link-active {
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  }

  section.page-content {
    margin: 10px 0;
    background-color: lightgray;
    padding: 20px;
  }

  footer {
    p {
      text-align: center;
    }
  }
}
</style>
<script setup lang="ts">
import MultiplicationTable from "@/views/MultiplicationTable.vue";
</script>
