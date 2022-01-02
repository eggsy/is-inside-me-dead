<script lang="ts" setup>
import Section from "./Item.vue"

import Title from "../Title.vue"
import Text from "../Text.vue"
import Button from "../Button.vue"

import sections from '../../assets/sections';
</script>

<template>
  <Section v-for="(item, idx) in sections" :key="idx">
    <Title size="2">{{ item.title }}</Title>
    <Text>{{ item.text }}</Text>

    <div v-if="item.buttons" class="flex space-x-3 w-full items-center overflow-x-auto">
      <Button
        v-for="(button, idx) in item.buttons"
        :key="`btn-${idx}`"
        :href="button.url"
        blank
      >{{ button.label }}</Button>
    </div>
  </Section>
</template>