<script lang="ts" setup>
defineProps<{
  half?: boolean;
  full?: boolean;
  padding?: boolean;
}>();
</script>

<template>
  <div
    class="space-y-16 text-gray-100 bg-neutral-800"
    :class="{
      'md:w-1/2': half === true,
      'py-16': padding === true,
      'h-screen flex items-center': full === true,
    }"
  >
    <slot />
  </div>
</template>
