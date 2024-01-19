<template>
    <div>
      <label for="search">Search by Name:</label>
      <input type="text" id="search" v-model="searchQuery" @input="searchContacts">
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchQuery = ref('');
  const emit=defineEmits(['search'])
  const searchContacts = () => {
    // Emit an event to notify the parent component (App.vue) about the search query
    emit('search', searchQuery.value);
  };
  </script>