<script setup></script>

<template>
  <main>
    <div class="Profile">
      <div class="Profile_title_box">
        <h2>個人檔案</h2>
        <span>Profile</span>
      </div>
      <ul class="Profile_text">
        <li>
          <a href="#">
            <div class="Profile_icon_container">
              <font-awesome-icon icon="fa-brands fa-github" class="Profile_icon" />
            </div>
            <h2>GitHub</h2>
            <h2 class="Profile_context">我的編程專案集錦!</h2>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="Profile_icon_container">
              <font-awesome-icon icon="fa-brands fa-blogger" class="Profile_icon" />
            </div>
            <h2>Blooger</h2>
            <h2 class="Profile_context">
              學習寫程式的過程中也不忘將學習經驗紀錄下來！ 同時也熱愛分享生活體會與閱讀心得!
            </h2>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="Profile_icon_container">
              <font-awesome-icon icon="fa-brands fa-linkedin" class="Profile_icon" />
            </div>
            <h2>Linkedin</h2>
            <h2 class="Profile_context">個人求學經歷 &工作經驗</h2>
          </a>
        </li>
      </ul>
      <a class="MORE_LINK" href="#">More About me</a>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: lighten; /* 混合模式，使背景圖片變淡 */

  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    background-color: #d8e70d;
    flex-direction: column;
    height: auto;
    // margin: 500px 0;
  }
  .Profile {
    margin-top: 40px;
    width: 60vw;
    // border: 2px solid red;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;

    .Profile_title_box {
      width: 50%;
      text-align: center;
      h2 {
        text-align: center;
        font-size: 2.5em;
        @media (max-width: 414px) {
          font-size: 1.5em;
        }
      }
      span {
        font-size: 1.6em;
        color: #c1c1c1;
      }
    }

    .Profile_text {
      width: 100%;
      height: auto;
      margin: 0 auto;
      text-align: center;
      line-height: 2;
      display: flex;
      gap: 25px;

      @media (max-width: 768px) {
        flex-direction: column; // 在小螢幕上改為垂直排列
        width: 100%; // 確保佔滿父層寬度
        padding: 0; // 清除填充
      }

      li {
        // border: 2px solid #000;
        width: 33.3%; // 桌面版本的寬度
        padding: 50px 0;

        @media (max-width: 768px) {
          width: 100%; // 手機版本的寬度
          padding: 20px 0; // 調整填充
          margin: 0; // 清除預設邊距
        }

        a {
          color: #000;

          .Profile_icon_container {
            width: 150px;
            height: 150px;
            background-color: #f8f8f8;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            @media (max-width: 414px) {
              width: 100px;
              height: 100px;
            }

            &:hover {
              background-color: #66d6c5;
            }
            .Profile_icon {
              font-size: 70px;
              @media (max-width: 414px) {
                font-size: 50px;
              }
            }
          }

          h2 {
            color: #c1c80a;
          }

          .Profile_context {
            color: orange;
            @media (max-width: 768px) {
              font-size: 17px;
            }
          }
        }
      }
    }

    .MORE_LINK {
      padding: 20px 50px;
      background-color: orange;
      border-radius: 10px;
    }
  }
}

//  我的LI標籤在RWD768寬度無法佔滿Profile_text父層的寬度
</style>
