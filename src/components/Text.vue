<script lang="ts" setup>
withDefaults(
  defineProps<{
    size?: string;
    small?: boolean;
  }>(),
  { size: "1" }
);
</script>

<template>
  <Component
    :is="small ? 'small' : 'p'"
    class="text-neutral-500"
    :class="{
      'text-xs': small === true,
    }"
  >
    <slot />
  </Component>
</template>
