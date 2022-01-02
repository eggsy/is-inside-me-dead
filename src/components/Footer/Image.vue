<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    required: true
  },
})
</script>

<template>
  <img :src="src" alt="footer image" class="rounded-full h-14 w-14" width="256" height="256" />
</template>