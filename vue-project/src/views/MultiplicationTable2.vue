<script setup>

import {ref} from "vue";

let rows = ref(10)
let cols = ref(10)
let name = ref(null)
let shouldCalculate = ref(true)
let toHighlight = ref(null)
</script>

<template>
  <h1>My multiplication table will live here!</h1>

  <div class="inputs">
    <label id="name">
      <span>What's your name:</span>
      <input id="name" v-model="name"/>
    </label>

    <label id="rows">
      <span>Rows:</span>
      <input type="number" id="rows" v-model.number="rows"/>
    </label>

    <label id="cols">
      <span>Cols:</span>
      <input type="number" id="cols" v-model.number="cols"/>
    </label>

    <label id="toHighlight">
      <span>Which row & column do you want to highlight?</span>
      <input type="number" id="toHighlight" v-model.number="toHighlight"/>
    </label>

    <label id="shouldCalculate">
      <span>Do you want to see the calculated values?</span>
      <input type="checkbox" id="shouldCalculate" v-model="shouldCalculate"/>
    </label>

    <!-- Vue conditional, IF name IS SOMETHING (not null -- nothing), then show first paragraph -->
    <p v-if="name">Hi there {{ name }}, let's build our table: </p>
    <p v-else>Hi there!</p>

    <p>You want {{ rows }} rows</p>
    <p>You want {{ cols }} cols</p>
    <p>Should we calculate the times table value? {{ shouldCalculate }}</p>

    <table>
      <tr v-for="row in rows" :key="row">
        <td v-for="col in cols" :key="col">
          <template v-if="shouldCalculate === true">
            {{ row * col }}
          </template>

          <template v-else>
            {{ row }} * {{ col }}
          </template>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
div.inputs {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    padding: 10px;
    border: 1px solid black;
    display: flex;
    gap: 15px;
  }
}
</style>
