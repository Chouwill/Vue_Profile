<script setup></script>

<template>
  <header>
    <div class="LOGO">
      <a href="#">Chouwill</a>
    </div>
    <ul class="nav_menu">
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
  </header>
</template>

<style lang="scss" scoped>

header {
  width: 100%;
  // background-color: forestgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10vw;
  .LOGO{
    // width: 50%;
    display: flex;
    font-size: 25px;
    // background-color: #2e1bad;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 50px;
    a{
      text-align: center;
      // background-color: #b61212;
      font-size: 30px;
    }
  }
  .nav_menu {
    flex: 1;
    display: flex;
    // width: 700px;
    // background-color: #b61212;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
    height: 50px;
    li {
      a {
        font-size: 25px;
        color: #000;
      }
    }
  }

  h2 {
    color: red;
    font-size: 25px;
  }
}
</style>
