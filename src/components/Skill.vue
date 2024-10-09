<script setup></script>

<template>
  <main>
    <div class="Skill">
      <div class="Skill_title_box">
        <h2>編程技術</h2>
        <span>Programming</span>
      </div>
      <div class="Skill_text">
        <div class="Skill_img">
          <img src="/src/image/Skill_PIC.png" alt="" />
        </div>
        <ul class="Skill_list">
          <li>
            <div class="row_title">
              <div class="circle">
                <img src="/src/image/Layout_icon.svg" alt="" />
              </div>
              <h2>切版技術</h2>
            </div>
            <h2>
              熟悉使用 Element UI、Font Awesome Icon
              等框架，能夠手刻切版並快速有效地完成響應式畫面設計，提升用戶體驗。
            </h2>
          </li>
          <li>
            <div class="row_title">
              <div class="circle">
                <font-awesome-icon icon="fa-brands fa-vuejs" class="Skill_icon" />
              </div>
              <h2>前端框架</h2>
            </div>
            <h2>
              熟悉 Vue.js 和
              Pinia，能夠構建高效的單頁應用（SPA），並利用狀態管理提升應用的可維護性和擴展性。
            </h2>
          </li>
          <li>
            <div class="row_title">
              <div class="circle">
                <font-awesome-icon icon="fa-brands fa-github" class="Skill_icon" />
              </div>
              <h2>Git版本控制</h2>
            </div>
            <h2>熟悉 Git 進行版本控制，能夠有效管理專案的版本歷史，協作開發流程順暢無阻。</h2>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #F8F8F8;

  display: flex;
  justify-content: center;
  align-items: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: lighten; /* 混合模式，使背景圖片變淡 */

  width: 100%;
  height: auto;
  .Skill {
    margin-top: 40px;
    width: 60vw;
    // border: 2px solid red;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    .Skill_title_box {
      // background-color: indianred;
      width: 50%;
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
    .Skill_text {
      width: 100%;
      height: auto;
      // border: 5px solid rgb(18, 173, 70);
      margin: 0 auto;
      text-align: center;
      // line-height: 2;
      display: flex;
      // gap: 25px;
      .Skill_img {
        width: 50%;
        // border: 2px solid tomato;
        img {
          max-width: 65%;
          // border: 2px solid tomato;
          object-fit: cover;
        }
      }
      .Skill_list {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        gap: 25px;
        li {
          .row_title {
            display: flex;
            // border: 2px solid red;
            justify-content: flex-start;
            align-items: center;
            gap: 25px;
            .circle {
              width: 100px;
              height: 100px;
              background-color: #1da63f;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              img {
                width: 40px;
                height: 40px;
                color: #000;
              }
              .Skill_icon {
                font-size: 40px;
                color: #000;
              }
            }
          }
        }
      }
    }
  }
}
</style>
