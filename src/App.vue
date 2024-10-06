<script setup>
import Header from './components/Header.vue'
import Introduce from './components/Introduce.vue'
import Project from './components/Project.vue'
import Skill from './components/Skill.vue'
import Footer from './components/Footer.vue'
import Profile from './components/Profile.vue'
</script>

<template>
  <div class="container">
    <Header />

    <Introduce />

    <Profile />
    <Skill />

    <Project />

    <Footer />
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  background-color: #d2bc4b;
  height: 100vh;
}
</style>
