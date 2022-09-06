<script lang="ts" setup>
// Layout
import FlexContainer from "../Container/Flex.vue";

// Elements
import FooterImage from "./Image.vue";

// Data
const accounts = [
  {
    name: "@eggsydev",
    url: "https://twitter.com/eggsydev",
    image: "https://github.com/eggsy.png",
  },
  {
    name: "@Tresmos",
    url: "https://twitter.com/Tresmos",
    image: "https://github.com/tresmos.png",
  },
];
</script>

<template>
  <FlexContainer flex-mobile dense>
    <a
      v-for="account in accounts"
      :key="account.name"
      :href="account.url"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FooterImage :src="account.image" :title="account.name" />
    </a>
  </FlexContainer>
</template>
