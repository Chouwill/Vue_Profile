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
            <div class="Skill_text">
              <h2>
                熟悉使用 Element UI、Font Awesome Icon
                等框架，能夠手刻切版並快速有效地完成響應式畫面設計，提升用戶體驗。
              </h2>
            </div>
          </li>
          <li>
            <div class="row_title">
              <div class="circle">
                <font-awesome-icon icon="fa-brands fa-vuejs" class="Skill_icon" />
              </div>
              <h2>前端框架</h2>
            </div>
            <div class="Skill_text">
              <h2>
                熟悉 Vue.js 和
                Pinia，能夠構建高效的單頁應用（SPA），並利用狀態管理提升應用的可維護性和擴展性。
              </h2>
            </div>
          </li>
          <li>
            <div class="row_title">
              <div class="circle">
                <font-awesome-icon icon="fa-brands fa-github" class="Skill_icon" />
              </div>
              <h2>Git版本控制</h2>
            </div>
            <div class="Skill_text">
              <h2>熟悉 Git 進行版本控制，能夠有效管理專案的版本歷史，協作開發流程順暢無阻。</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
}
main {
  background-color: #f8f8f8;

  display: flex;
  justify-content: center;
  align-items: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: lighten; /* 混合模式，使背景圖片變淡 */

  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    // background-color: #444444;

    // flex: 1;
  }
  .Skill {
    margin-top: 40px;
    width: 60vw;
    // border: 2px solid red;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    @media (max-width: 414px) {
      width: 100%;
    }
    .Skill_title_box {
      // background-color: indianred;
      // border: 1px solid #000;
      width: 65%;
      text-align: center;
      h2 {
        text-align: center;
        font-size: 2.5em;
        // color: #c1c1c1;
        @media (max-width: 414px) {
          font-size: 1.5em;
        }
      }
      span {
        // background-color: indianred;
        font-size: 1.6em;
        color: #c1c1c1;
        text-align: center;
        @media (max-width: 414px) {
          font-size: 1.4em;
        }
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
      @media (max-width: 820px) {
        
        flex-wrap: wrap;
      }
      @media (max-width: 768px) {
        width: 100%;
        flex-wrap: wrap;
      }
      .Skill_img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        // border: 2px solid tomato;
        @media (max-width: 820px) {
          // background-color: #191167;
          // border: 2px solid rgb(39, 136, 34);

          width: 100%;
          flex-wrap: wrap;

          // flex: 1;
        }
        img {
          max-width: 65%;
          // border: 2px solid tomato;
          object-fit: cover;
          @media (max-width: 820px) {
            max-width: 100%;
          }
          @media (max-width: 768px) {
            max-width: 90%;
          }
        }
      }
      .Skill_list {
        width: 50%; //  桌機寬度
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        gap: 25px;
        box-sizing: border-box;
        @media (max-width: 820px) {
          // background-color: #0b7c2d; //RWD768寬度  div 寬度展不開
          // border: 20px solid peru;
          width: 100%;
          // margin-top: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 768px) {
          // background-color: #0b7c2d; //RWD768寬度  div 寬度展不開
          width: 100%;
          // margin-top: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 414px) {
          margin: 0 auto;
        }
        li {
          @media (max-width: 768px) {
            // border: 1px solid rgb(162, 10, 10); //  RWD 768寬度 border被裁掉一半

            width: 100%;
          }
          &:nth-child(1) {
            @media (max-width: 768px) {
              margin-top: 25px;
            }
          }
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
              @media (max-width: 768px) {
                width: 70px;
                height: 70px;
              }
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
          .Skill_text {
            @media (max-width: 768px) {
              width: 90%;
              // border: 1px solid wheat;
            }
            h2 {
              @media (max-width: 820px) {
                font-size: 18px;
                text-align: left;
              }
              @media (max-width: 768px) {
                font-size: 18px;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
}
</style>
