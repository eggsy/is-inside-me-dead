<script lang="ts" setup>
// Container
import TimelineContainer from "./Container.vue"

// Item
import TimelineItem from "./Item.vue"

// Elements
import TimelineTitle from './Title.vue';
import TimelineText from './Text.vue';
import TimelineDot from './Dot.vue';
import TimelineBox from './Box.vue';

// Data
const timelineData = [{
  title: "We created the platform",
  text: "21 July 2021, 04:30 PM"
},
{
  title: "we hit 1 trilyon user",
  text: "anani awradini."
},
{
  title: "yukardakine inanmadiysan buna hic inanmazsin",
  text: "benden demesi."
},
{
  title: "annaı bi sikmisiz",
  text: "sakasiz."
}]
</script>

<template>
  <TimelineContainer>
    <TimelineItem v-for="(data, idx) in timelineData" :key="idx">
      <TimelineBox>
        <TimelineTitle>{{ data.title }}</TimelineTitle>
        <TimelineText>{{ data.text }}</TimelineText>
      </TimelineBox>

      <TimelineDot />
    </TimelineItem>
  </TimelineContainer>
</template>