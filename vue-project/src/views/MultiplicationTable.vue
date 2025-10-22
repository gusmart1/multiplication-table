<script setup lang="ts">


import { ref } from 'vue'

let rows = ref(10)
let cols = ref(10)
let name = ref(null)
</script>

<template>
  <h1>Enter a value:</h1>

  <div class="inputs">
    <label id="name">
      <span>What's your name:</span>
      <input  id="name" v-model="name"/>
    </label>

    <label id="rows">
      <span>Rows:</span>
      <input type="number" id="rows" v-model.number="rows"/>
    </label>

    <label id="cols">
      <span>Cols:</span>
      <input type="number" id="cols" v-model.number="cols"/>
    </label>

    <label id="shouldCalculate">
      <span>Do you want to see the calculated values?</span>
      <input type="checkbox" id="shouldCalculate" />
    </label>

    <p>Hi there {{ name }}, lets build our table </p>

    <p v-if="name">HI there</p>
    <p v-else>Hi there {{ name }}, lets build our table: </p>

    <p>How many  {{ rows }}</p>
    <p>How many  {{ cols }}</p>

    <table>
      <tr v-for="row in rows" :key="row">
       <td v-for="col in cols" :key="col">
       {{ row * col}}
       </td>
        I'm on row {{ row }}</tr>
    </table>

  </div>
</template>

<style scoped>
div.inputs {
  border: 1px solid black;
  width: 50%;
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    padding: 10px;
    border: 1px solid black;
    display: flex;
    gap: 15px;
  }
}
</style>
