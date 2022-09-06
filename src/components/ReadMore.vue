<script lang="ts" setup>
import Text from "./Text.vue";

const goToDetails = () => {
  document.getElementById("details")?.scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<template>
  <Text
    v-motion-slide-bottom
    class="cursor-pointer inset-x-0 bottom-10 absolute !ml-0 md:inset-x-auto hover:underline"
    :delay="1500"
    @click.native="goToDetails"
    >Read more...</Text
  >
</template>
