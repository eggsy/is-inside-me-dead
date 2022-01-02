<script lang="ts" setup>
import Title from "./Title.vue"
import Text from "./Text.vue"
</script>

<template>
  <header class="space-y-2">
    <Title v-motion-slide-right :delay="200">is-inside.me</Title>
    <Text v-motion-slide-right :delay="400">is not inside you anymore</Text>
  </header>
</template>