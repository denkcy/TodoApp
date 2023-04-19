<template>
  <div class="outer-bar">
    <div class="inner-bar" :style="{width:`${progress} %`,backgroundColor:[random]}"></div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const props = defineProps(['progress'])
console.log(props)
const color = ref([
    'rgb(255,215,161)',
    'rgb(125,415,161)',
    'rgb(66,107,250)',
    'rgb(40,154,246)'

])
const random= color.value[Math.floor(Math.random()*color.value.length)]
console.log(random)
</script>
