<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h3>{{ count }}</h3>
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const count = computed(() => store.state.count);
const isLoading = computed(() => store.state.isLoading);
const increment = () => store.commit("increment");
const incrementBy = () => store.commit("incrementBy", 5);
const incrementRandomInt = () => store.dispatch("incrementRandomInt")
</script>

<style></style>
