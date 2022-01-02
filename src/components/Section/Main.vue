<script lang="ts" setup>
// Layout
import Section from "./Item.vue"

// Elements
import Title from "../Title.vue"
import Text from "../Text.vue"
import Button from "../Button.vue"

// Data
import sections from '../../assets/sections';
</script>

<template>
  <Section v-for="(item, idx) in sections" :key="idx">
    <Title size="2">{{ item.title }}</Title>
    <Text>{{ item.text }}</Text>

    <div v-if="item.buttons" class="flex items-center w-full space-x-3 overflow-x-auto">
      <Button
        v-for="(button, idx) in item.buttons"
        :key="`btn-${idx}`"
        :href="button.url"
        blank
      >{{ button.label }}</Button>
    </div>
  </Section>
</template>