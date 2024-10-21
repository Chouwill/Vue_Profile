<script setup></script>

<template>
  <main ref="Skill" class="section">
    <div class="Skill">
      <div class="Skill_title">
        <h2>編程技術</h2>
        <span>Programming</span>
      </div>
      <div class="Skill_box">
        <div class="Skill_img">
          <img src="/src/image/Skill_PIC.svg" alt="" class="Skill_icon_img" />
        </div>
        <ul class="Skill_text">
          <li>
            <div class="Skill_row_icon">
              <div class="Skill_icon">
                <img class="icon-image" src="/src/image/Layout_icon.svg" alt="" />
              </div>
              <div class="icon_title">
                <h2>切版技術</h2>
              </div>
            </div>
            <div class="Skill_list">
              <h2>
                熟悉使用 Element UI、Font Awesome Icon
                等框架，能夠手刻切版並快速有效地完成響應式畫面設計，提升用戶體驗。
              </h2>
            </div>
          </li>
          <li>
            <div class="Skill_row_icon">
              <div class="Skill_icon">
                <font-awesome-icon class="icon-image" icon="fa-brands fa-vuejs" />
              </div>
              <div class="icon_title">
                <h2>Vue.js 技術</h2>
              </div>
            </div>
            <div class="Skill_list">
              <h2>
                熟悉 Vue.js 和
                Pinia，能夠構建高效的單頁應用（SPA），並利用狀態管理提升應用的可維護性和擴展性。
              </h2>
            </div>
          </li>
          <li>
            <div class="Skill_row_icon">
              <div class="Skill_icon">
                <font-awesome-icon class="icon-image" icon="fa-brands fa-github" />
              </div>
              <div class="icon_title">
                <h2>版本控制</h2>
              </div>
            </div>
            <div class="Skill_list">
              <h2>熟悉 Git 進行版本控制，能夠有效管理專案的版本歷史，協作開發流程順暢無阻。</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  // border: 2px solid tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #f8f8f8;
  .Skill {
    width: 100%;
    // border: 5px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: auto;

    .Skill_title {
      width: 100%;
      // border: 5px solid red;
      h2 {
        // border: 2px solid palegreen;
        font-size: 40px;
        text-align: center;
      }
      span {
        display: block;
        width: 100%;
        text-align: center;
        margin: 0 auto;
        // border: 2px solid palegreen;
        font-size: 1.6em;
        color: #c1c1c1;
      }
    }
    .Skill_box {
      width: 80vw;
      display: flex;
      // border: 5px solid purple;
      justify-content: center;
      align-items: center;
      @media (max-width: 894px) {
        width: 100%;
        flex-direction: column;
      }
      .Skill_img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 95vh;
        // border: 2px solid red;
        @media (max-width: 768px) {
          width: 100%;
        }

        img {
          max-width: 50%;
          height: 95vh;
          // border: 2px solid red;
          @media (max-width: 1190px) {
            max-width: 100%;
          }
          @media (max-width: 414px) {
            height: 60vh;
          }
        }
      }
      .Skill_text {
        width: 50%;
        // border: 5px solid yellow;
        height: 95vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 50px;
        padding: 0;
        margin: 0;
        @media (max-width: 768px) {
          width: 100%;
        }
        @media (max-width: 420px) {
         gap: 10px;
        }
        @media (max-width: 414px) {
          gap: 10px;
        }
        li {
          width: 100%;
          // border: 2px solid red;
          // display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          @media (max-width: 768px) {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .Skill_row_icon {
            display: flex;
            align-items: center;
            gap: 15px;

            // border: 2px solid red;
            @media (max-width: 894px) {
            }
            @media (max-width: 768px) {
              width: 80%;
              justify-content: center;
            }
            .Skill_icon {
              width: 80px; // 統一圓的直徑
              height: 80px; // 統一圓的直徑
              border-radius: 50%; // 使其成為圓形
              background-color: #f0f0f0; // 圓形背景顏色
              display: flex;
              justify-content: center;
              align-items: center;
              @media (max-width: 606px) {
                width: 60px;
                height: 60px;
              }
              @media (max-width: 420px) {
                width: 60px;
                height: 60px;
              }
              @media (max-width: 414px) {
                width: 60px;
                height: 60px;
              }
              .icon-image {
                width: 60%; // 調整圖標大小
                height: auto; // 自動調整高度
                @media (max-width: 414px) {
                  width: 40%;
                  height: auto;
                }
              }
            }
          }
          .Skill_list {
            display: flex;
            // justify-content: center;
            // align-items: center;

            width: 100%;
            // border: 3px solid turquoise;
            // padding: 50px 0;
            @media (max-width: 768px) {
              width: 80%;
            }
            @media (max-width: 414px) {
              // width: 60%;
            }
            h2 {
              font-size: 20px;
              text-align: center;
              @media (max-width: 414px) {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
