<script setup></script>

<template>
  <main ref="Project" class="section">
    <div class="Project">
      <div class="Project_title_box">
        <h2>專案成就</h2>
        <span>Projects</span>
      </div>
      <ul class="Project_text">
        <li>
          <img src="/src/image/Gift_Shop_LOGO.png" alt="Gift_Shop專案" />
        </li>
        <li>
          <img src="/src/image/Dream_Plan_LOGO.png" alt="Dream_Plan專案" />
        </li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #FFFFFF;

  display: flex;
  justify-content: center;
  align-items: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: lighten; /* 混合模式，使背景圖片變淡 */

  width: 100%;
  height: auto;
  .Project {
    margin-top: 40px;
    width: 60vw;
    // border: 2px solid red;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    .Project_title_box {
      // background-color: indianred;
      width: 100%;
      text-align: center;
      h2 {
        text-align: center;
        font-size: 2.5em;
        // color: #c1c1c1;
      }
      span {
        // background-color: indianred;
        font-size: 1.6em;
        color: #c1c1c1;
      }
    }
    .Project_text{
      display: flex;
      gap: 20px;
      li{
        img{
          width: 100%;
          height: 85px;
        }
      }
    }
  }
}
</style>
