<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div class="font-body">
    <Hero></Hero>
  <Card></Card>
  <Footer></Footer>
  </div>
</template>

<script>

import Card from '@/components/Card.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Card,
    Hero,
    Footer
  }
}
</script>
