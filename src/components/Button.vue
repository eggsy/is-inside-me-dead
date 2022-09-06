<script lang="ts" setup>
defineProps<{
  href?: string;
  blank?: boolean;
}>();
</script>

<template>
  <Component
    :is="href ? 'a' : 'button'"
    :target="blank && '_blank'"
    rel="noreferrer noopener"
    class="flex-shrink-0 px-10 py-2 text-white transition-colors rounded-md bg-neutral-700 hover:bg-opacity-50"
    :href="href"
  >
    <slot />
  </Component>
</template>
