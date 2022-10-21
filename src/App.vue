<template>
  <Counter></Counter>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
//Components
const Counter = defineAsyncComponent(() => import("@/components/Counter.vue"));
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
