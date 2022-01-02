<template>
  <section
    v-motion
    :initial="{
      opacity: 0,
      translateX: '25%',
    }"
    :visible="{
      opacity: 1,
      translateX: '0%',
      transition: {
      },
    }"
    :delay="500"
    class="space-y-4"
  >
    <slot />
  </section>
</template>