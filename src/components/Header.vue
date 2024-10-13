<script setup>
import { ref } from 'vue'

const MenuActive = ref(false)
console.log(MenuActive)

const OpenMenu = () => {
  MenuActive.value = !MenuActive.value
  console.log(MenuActive.value)
}
</script>

<template>
  <header>
    <div class="LOGO">
      <a href="#">Chouwill</a>
    </div>
    <ul :class="['Phone_menu', { active: MenuActive }]">
      <li>
        <a href="#">個人檔案</a>
      </li>
      <li>
        <a href="#">前端技術</a>
      </li>
      <li>
        <a href="#">專案作品</a>
      </li>
      <li>
        <!-- <a href="#">55555</a> -->
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
  background-color: forestgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10vw;
  @media (max-width: 820px) {
    background-color: #444444;
    gap: 0px;
    // flex: 1;
  }
  @media (max-width: 768px) {
    background-color: #444444;

    // flex: 1;
  }
  .LOGO {
    // width: 50%;
    display: flex;
    font-size: 25px;
    // background-color: #2e1bad;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 50px;
    @media (max-width: 820px) {
      // background-color: #aada0b;

      flex: 1;
    }
    @media (max-width: 768px) {
      // background-color: #18891e;

      flex: 1;
    }
    a {
      text-align: center;
      // background-color: #b61212;
      font-size: 30px;
    }
  }
  ul {
    // 桌機Menu 樣式
    flex: 1;
    display: flex;
    // width: 700px;
    // background-color: #b61212;
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
        color: #000;
        @media (max-width: 820px) {
          // color: #b61212;
          font-size: 20px;
        }
      }
    }
  }
  .Phone_menu {
    // 手機Menu 樣式
    // background-color: orange;
    @media (max-width: 820px) {
      // background-color: rgb(92, 11, 84);
      flex: 1;
      gap: 10px;
    }
    @media (max-width: 768px) {
      // background-color: orange;
    }
    &.active {
      width: 40%;
      // border: 1px solid white;
      height: 35vh;
      background-color: #444444;
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 42px;
      // left: 145px;
      right: 0;
      bottom: 0;
      z-index: 90;
      gap: 15px;
    }
  }
  .Phone_bar {
    // background-color: orange;
    display: none;
    @media (max-width: 768px) {
      // background-color: #d8e70d;
      display: flex;
      justify-content: flex-end;
      width: 50%;
      z-index: 95;
    }
    button {
      padding: 10px 25px;
      border: none; /* 移除邊框 */
      outline: none; /* 移除外框 */
      box-shadow: none; /* 移除陰影 */
      cursor: pointer; /* 設置鼠標樣式 */
      -webkit-appearance: none; /* 移除 Webkit 瀏覽器的預設樣式 */
      -moz-appearance: none; /* 移除 Mozilla 瀏覽器的預設樣式 */
      appearance: none; /* 移除預設樣式 */
      @media (max-width: 768px) {
        width: 50%;
        // background-color: red;
      }
      .PhoneBtnIcon {
        font-size: 30px;
      }
    }
  }
}
</style>
