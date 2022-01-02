<script lang="ts" setup>
defineProps({
  half: {
    type: Boolean,
    required: false,
    default: false,
  },
  full: {
    type: Boolean,
    required: false,
    default: false,
  },
  padding: {
    type: Boolean,
    required: false,
    default: false,
  }
})
</script>

<template>
  <div
    class="space-y-16 bg-neutral-800 text-gray-100"
    :class="{
      'md:w-1/2': half === true,
      'py-16': padding === true,
      'h-screen flex items-center': full === true
    }"
  >
    <slot />
  </div>
</template>