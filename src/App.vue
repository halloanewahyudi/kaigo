<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template>
  <div class="text-gray-700">
<Navbar />

  <RouterView />
  
  </div>
</template>
