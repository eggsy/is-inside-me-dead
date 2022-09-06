<script lang="ts" setup>
defineProps<{
  src: string;
}>();
</script>

<template>
  <img
    :src="src"
    alt="footer image"
    class="transition-all rounded-full ring-offset-neutral-800 ring-offset-2 h-14 w-14 hover:ring-1 ring-white/10"
    width="256"
    height="256"
  />
</template>
