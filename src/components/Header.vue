<script setup>
import { ref, defineEmits } from 'vue'

const MenuActive = ref(false)
console.log(MenuActive)

const OpenMenu = () => {
  MenuActive.value = !MenuActive.value
  console.log('Menu Active:', MenuActive.value) // 確保這裡能看到狀態變化
}

const emit = defineEmits()
const scrollTo = (section) => {
  console.log('Scrolling to:', section) // 檢查輸出
  emit('scroll-to', section)
}
</script>

<template>
  <header>
    <div class="LOGO">
      <a href="#introduce" @click.prevent="scrollTo('Introduce')">Chouwill</a>
    </div>
    <ul :class="['Phone_menu', { active: MenuActive }]">
      <li>
        <a href="#profile" @click.prevent="scrollTo('Profile')">個人檔案</a>
      </li>
      <li>
        <a href="#skill" @click.prevent="scrollTo('Skill')">前端技術</a>
      </li>
      <li>
        <a href="#project" @click.prevent="scrollTo('Project')">專案作品</a>
      </li>
    </ul>
    <div class="Phone_bar">
      <button class="Phone_Btn" @click="OpenMenu">
        <font-awesome-icon icon="fa-solid fa-bars" class="PhoneBtnIcon" />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  background-color: #444444;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10vw;
  position: fixed; /* 或使用 fixed */
  top: 0; /* 固定在頂部 */
  z-index: 100; /* 確保在其他元素之上 */

  @media (max-width: 820px) {
    gap: 0px;
  }

  .LOGO {
    display: flex;
    font-size: 25px;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 50px;

    a {
      text-align: center;
      font-size: 35px;
      color: white;
    }
  }

  ul {
    flex: 1;
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
    height: 50px;

    @media (max-width: 768px) {
      display: none;
    }

    li {
      a {
        font-size: 25px;
        color: white;

        @media (max-width: 820px) {
          font-size: 20px;
        }
      }
    }
  }

  .Phone_menu {
    @media (max-width: 820px) {
      flex: 1;
      gap: 10px;
    }

    &.active {
      width: 40%;
      height: 35vh;
      background-color: #444444;
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 42px;
      right: 0;
      bottom: 0;
      z-index: 90;
      gap: 15px;
    }
  }

  .Phone_bar {
    display: none;

    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-end;
      width: 50%;
      z-index: 95;
    }

    button {
      padding: 10px 25px;
      border: none;
      outline: none;
      box-shadow: none;
      cursor: pointer;

      .PhoneBtnIcon {
        font-size: 30px;
      }
    }
  }
}
</style>
