<script lang="ts" setup>
defineProps({
  href: {
    type: String,
    required: false,
    default: "",
  },
  blank: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <Component
    :is="href ? 'a' : 'button'"
    :target="blank && '_blank'"
    rel="noreferrer noopener"
    class="rounded-md bg-neutral-700 flex-shrink-0 text-white py-2 px-10 transition-colors hover:bg-opacity-50"
    :href="href"
  >
    <slot />
  </Component>
</template>