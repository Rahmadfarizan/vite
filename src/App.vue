<template>
  <router-view />
</template>

<script setup>
  import { onBeforeRouteUpdate } from 'vue-router'
  import router from './router'

  onBeforeRouteUpdate((to, from, next) => {
    console.log('Navigating to:', to.fullPath);
    next();
  });
</script>
