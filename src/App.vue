<!-- 參考 -->
<!-- https://revealjs.com/ -->
<!-- https://ithelp.ithome.com.tw/articles/10185467 -->
<!-- https://ithelp.ithome.com.tw/articles/10195641 -->

<template>
  <div class="reveal">
    <div class="slides">
      <Preamble></Preamble>
      <StrartTrip></StrartTrip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppIndex',
}
</script>

<script setup>
// reveal
import reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.js'
// vue
import { onMounted } from 'vue'
// chapters
// import RevealSectionExample from './components/RevealSectionExample.vue'
import Preamble from '@/chapters/preamble/index.vue'
import StrartTrip from '@/chapters/strartTrip/index.vue'

onMounted(async () => {
  reveal.initialize({
    hash: true,
    plugins: [Markdown],
  })
})
</script>

<style lang="scss">
@import '@/scss/ptt';
</style>
