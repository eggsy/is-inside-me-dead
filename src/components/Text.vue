<script lang="ts" setup>
defineProps({
  size: {
    type: String,
    required: false,
    default: "1"
  },
  small: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <Component
    :is="small ? 'small' : 'p'"
    class="text-neutral-500"
    :class="{
      'text-xs': small === true
    }"
  >
    <slot />
  </Component>
</template>