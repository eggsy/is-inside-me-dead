<script lang="ts" setup>
// Layout
import Header from "./components/Header.vue";
import Container from "./components/Container/Main.vue";
import FlexContainer from "./components/Container/Flex.vue";
import Footer from "./components/Footer/Main.vue";

// Elements
import ReadMore from "./components/ReadMore.vue";

// Extra
import Lenny from "./components/Lenny.vue";
import Sections from "./components/Section/Main.vue";
</script>

<template>
  <FlexContainer full padding relative>
    <Container half>
      <Header />
    </Container>

    <Container>
      <Lenny />
    </Container>

    <ReadMore />
  </FlexContainer>

  <Container id="details" padding half>
    <Sections />
  </Container>

  <Footer />
</template>
