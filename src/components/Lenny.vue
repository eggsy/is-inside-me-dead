<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { useTippy } from "vue-tippy"

// Tippy CSS
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away-extreme.css";

// Script
const target = ref()

const messages = [
  "help me.",
  "im dying.",
  "i tried to be cool.",
  "pls forgiv me.",
  "i luv u.",
  "dont leave me.",
  "i'll always be with u",
  "ur the best.",
  "im sorry.",
  "im dead.",
  "trust me.",
  "i trust u.",
  "i wish u the best.",
  "ur my fav person.",
  "i suport u.",
  "im gonna die.",
]

// Tippy
const currentMessage = ref(messages[Math.floor(Math.random() * messages.length)])

const { state, show, hide, setContent } = useTippy(target, {
  content: currentMessage.value,
  animation: 'shift-away-extreme',
})

onMounted(() => {
  setTimeout(() => {
    show();

    setInterval(() => {
      if (state.value.isVisible) return hide();
      else show();

      const filteredMessages = messages.filter(message => message !== currentMessage.value)
      setContent(filteredMessages[Math.floor(Math.random() * filteredMessages.length)])
    }, Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000)
  }, 1500)
})
</script>

<template>
  <div
    ref="target"
    v-motion-pop
    :delay="1000"
    class="flex font-bold space-x-3 text-4xl items-center"
  >
    <div
      v-motion
      :initial="{
        translateX: 0,
        translateY: 0,
      }"
      :enter="{
        translateX: 20,
        translateY: 10,
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 1000,
        },
      }"
    >っ</div>

    <div
      v-motion
      :initial="{
        rotate: '0deg',
      }"
      :enter="{
        rotate: '-25deg',
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 1000,
        },
      }"
    >–</div>

    <div
      v-motion
      :initial="{
        scale: 1,
      }"
      :enter="{
        scale: 1.1,
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 1000,
        },
      }"
    >‸</div>

    <div
      v-motion
      :initial="{
        rotate: '0deg',
      }"
      :enter="{
        rotate: '25deg',
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 1000,
        },
      }"
      :delay="100"
    >–</div>

    <div
      v-motion
      :initial="{
        translateX: 0,
        translateY: 0,
        scaleX: -1,
      }"
      :enter="{
        translateX: -20,
        translateY: 10,
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 1000,
        },
      }"
      :delay="100"
    >っ</div>
  </div>
</template>