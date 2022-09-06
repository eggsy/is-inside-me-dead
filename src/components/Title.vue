<script lang="ts" setup>
withDefaults(
  defineProps<{
    size?: string;
  }>(),
  { size: "1" }
);
</script>

<template>
  <Component
    :is="`h${size}`"
    :class="{
      'font-bold text-white': true,
      'text-4xl md:text-6xl': size === '1',
      'text-2xl': size === '2',
      'text-xl': size === '3',
    }"
  >
    <slot />
  </Component>
</template>
