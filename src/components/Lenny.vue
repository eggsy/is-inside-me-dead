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
  "im never gona giv u up.",
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
const isMobile = ref(false)

const { state, show, hide, setContent, setProps } = useTippy(target, {
  content: currentMessage.value,
  animation: 'shift-away-extreme',
  placement: 'top',
  hideOnClick: false,
})

const updateProps = () => setProps({
  placement: isMobile.value ? 'bottom' : 'top',
  offset: isMobile.value ? [0, 30] : [0, 10],
})

onMounted(() => {
  // Change the placement of arrow on mobile
  isMobile.value = window.innerWidth < 768
  updateProps();

  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 768;
    updateProps()
  })

  // Change message
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

// Rick Roll
const gotRickRolled = ref(false);

const openRickRoll = () => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  gotRickRolled.value = true
}

// Random face
const faces = [
  'Ծ_Ծ',
  '◉︵◉',
  'ᗒᗣᗕ',
  '♥︵♥',
  'v︵v',
  '.︵.'
].map(item => item.split(''))

const randomFace = faces[Math.floor(Math.random() * faces.length)]
</script>

<template>
  <div
    ref="target"
    v-motion-pop
    :delay="1000"
    class="flex items-center space-x-4 text-6xl font-bold select-none text-white/75"
    @click="openRickRoll()"
  >
    <div
      v-motion
      :initial="{
        translateY: 0
      }"
      :enter="{
        translateY: 10,
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 1000,
        },
      }"
    >(</div>

    <div class="flex items-center space-x-2">
      <div
        v-motion
        :initial="{
          rotate: -5,
        }"
        :enter="{
          rotate: -15,
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: 1000,
          },
        }"
      >{{ randomFace[0] }}</div>

      <div
        v-motion
        :initial="{
          translateY: 20,
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
      >{{ gotRickRolled ? '.' : randomFace[1] }}</div>

      <div
        v-motion
        :initial="{
          rotate: 7,
        }"
        :enter="{
          rotate: 15,
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: 1000,
          },
        }"
        :delay="100"
      >{{ randomFace[2] }}</div>
    </div>

    <div
      v-motion
      :initial="{
        translateY: 10
      }"
      :enter="{
        translateY: -10,
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 1000,
        },
      }"
    >)</div>
  </div>
</template>