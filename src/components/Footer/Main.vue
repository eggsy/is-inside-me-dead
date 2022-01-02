<script lang="ts" setup>
// Typography
import Title from "../Title.vue"
import Text from "../Text.vue"

// Layout
import FooterContainer from "./Container.vue"
import FooterItem from "./Item.vue"

// Elements
import FooterSocials from "./Socials.vue"
</script>

<template>
  <FooterContainer>
    <FooterItem>
      <Title size="2">Thank you!</Title>
      <Text>Really. For everyhing. We love you. We respect you. Hope to see you in the future.</Text>
    </FooterItem>

    <FooterItem>
      <Title size="2">Follow us on Twitter</Title>

      <FooterSocials />
    </FooterItem>
  </FooterContainer>
</template>