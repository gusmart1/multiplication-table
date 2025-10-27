<template>
  <section class="container">
    <div class="generate-box">
      <div>
        <label>
          Rows
          <input type="number" min="1" max="30" v-model.number="rows"/>
        </label>
        <label>
          Columns
          <input type="number" min="1" max="30" v-model.number="cols"/>
        </label>
      </div>
      <div>
        <label>
          Highlight row and col?
          <input type="number" min="1" :max="highlightMax" v-model.number="highlight"/>
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="showHeader"/> Show headers
        </label>
        <label>
          <input type="checkbox" v-model="showProducts"/> Show products (row × col)
        </label>
      </div>
    </div>

    <table>
      <thead v-if="showHeader">
      <tr>
        <th>×</th>
        <th v-for="col in cols" :key="'header' + col" :class="{ 'highlighted' : col === highlight}">
          {{ col }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in rows" :class="{ 'highlighted' : row === highlight }" :key="row">
        <th v-if="showHeader">{{ row }}</th>
        <td v-for="col in cols" :key="row+'-'+col" :class="{ 'highlighted' : col === highlight }">
          <template v-if="showProducts">{{ row * col }}</template>
          <template v-else>{{ row }} × {{ col }}</template>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import {computed, ref} from 'vue'

const rows = ref(10)
const cols = ref(10)
const highlight = ref(null)
const showHeader = ref(true)
const showProducts = ref(true)
const highlightMax = computed(() => Math.min(rows.value, cols.value));
</script>

<style scoped>
section.container {
  div.generate-box {
    margin: 0 auto;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  table {
    margin: 30px auto 0;

    .highlighted {
      color: #fff;
      background-color: red;
    }
  }
}
</style>
