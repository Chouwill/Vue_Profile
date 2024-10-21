<script setup>
import { ref, nextTick } from 'vue'
import Header from './components/Header.vue'
import Introduce from './components/Introduce.vue'
import Project from './components/Project.vue'
import Skill from './components/Skill.vue'
import Footer from './components/Footer.vue'
import Profile from './components/Profile.vue'

const IntroduceRef = ref(null)
const ProfileRef = ref(null)
const SkillRef = ref(null)
const ProjectRef = ref(null)

// 滾動到指定部分的函數
const scrollTo = (section) => {
  console.log('Received section:', section) // 檢查輸出
  let refElement = null
  switch (section) {
    case 'Introduce':
      refElement = IntroduceRef.value
      break
    case 'Profile':
      refElement = ProfileRef.value
      break
    case 'Skill':
      refElement = SkillRef.value
      break
    case 'Project':
      refElement = ProjectRef.value
      break
    default:
      console.log('Section ref not found:', section) // 檢查輸出
  }
  if (refElement) {
    console.log(refElement?.$el?.offsetTop)
    window.scrollTo({
      top: refElement?.$el?.offsetTop,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div class="container">
    <Header @scroll-to="scrollTo" />

    <Introduce ref="IntroduceRef" />
    <Profile ref="ProfileRef" />
    <Skill ref="SkillRef" />
    <Project ref="ProjectRef" />

    <Footer />
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  height: 100vh;
}
</style>
