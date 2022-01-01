<script lang="ts" setup>
// Layout
import Header from './components/Header.vue';
import Container from './components/Container/Main.vue';
import FlexContainer from './components/Container/Flex.vue';
import Section from './components/Section.vue';

// Elements
import Timeline from './components/Timeline/Main.vue';

// Typography
import Title from './components/Title.vue';
import Text from './components/Text.vue';
</script>

<template>
  <Container padding>
    <Header>
      <Title>is-inside.me</Title>
      <Text small>is not inside you anymore (っ- ‸ – ς)</Text>
    </Header>
  </Container>

  <FlexContainer>
    <Container half>
      <Section>
        <Title size="2">What happened?</Title>
        <Text>After 3 years of serving your files, we are retiring. It's been a great adventure for all of us. We learned a lot creating this project. We were so happy to see it scale this much in time and we were glad we created something you, someone, actually used.</Text>
      </Section>
    </Container>

    <Container half>
      <Timeline />
    </Container>
  </FlexContainer>
</template>
