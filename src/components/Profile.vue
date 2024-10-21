<script setup></script>

<template>
  <main ref="Profile" class="section">
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
            <h2 class="Profile_context">探索我的開源專案和編程作品!</h2>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="Profile_icon_container">
              <font-awesome-icon icon="fa-brands fa-blogger" class="Profile_icon" />
            </div>
            <h2>Blooger</h2>
            <h2 class="Profile_context">記錄我的學習旅程<br />分享程式設計的技巧與生活的點滴！</h2>
          </a>
        </li>
        <!-- <li>
          <a href="#">
            <div class="Profile_icon_container">
              <font-awesome-icon icon="fa-brands fa-linkedin" class="Profile_icon" />
            </div>
            <h2>Linkedin</h2>
            <h2 class="Profile_context">查看我的專業背景和工作經歷。</h2>
          </a>
        </li> -->
      </ul>
      <a class="MORE_LINK" href="#">More About Chouwill</a>
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
  height: auto;
  @media (max-width: 768px) {
    // background-color: #d8e70d;
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
    @media (max-width: 1092px) {
      width: 80vw;
      gap: 0;
    }
    @media (max-width: 978px) {
      width: 100vw;
      gap: 0;
    }
    @media (max-width: 820px) {
      gap: 20px;
      // border: 5px solid rgb(176, 117, 29);
      width: 90%;
    }

    .Profile_title_box {
      width: 50%;
      text-align: center;
      // border: 2px solid palegreen;

      @media (max-width: 820px) {
        // border: 2px solid palegreen;
        
      }
      h2 {
        text-align: center;
        font-size: 2.5em;
        color: #000;
        @media (max-width: 414px) {
          font-size: 1.5em;
        }
      }
      span {
        font-size: 1.6em;
        // color: #c1c1c1;
        color: #000;
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
      @media (max-width: 820px) {
        // border: 2px solid palegreen;
        width: 100%;
        padding: 0;
      }

      @media (max-width: 768px) {
        flex-direction: column; // 在小螢幕上改為垂直排列
        width: 100%; // 確保佔滿父層寬度
        padding: 0; // 清除填充
      }

      li {
        // border: 2px solid #000;
        //width: 33.3%; // 桌面版本的寬度
        padding: 50px 0;
        width: 50%;
        // border: 5px solid yellow;

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
            // color: #c1c80a;
            color: #000;
          }

          .Profile_context {
            color: #000;
            @media (max-width: 768px) {
              font-size: 17px;
            }
          }
        }
      }
      li:nth-child(1){
        .Profile_context{
          // color: peru;
          line-height: 4;
        }
      }
    }

    .MORE_LINK {
      padding: 20px 50px;
      background-color: orange;
      border-radius: 10px;
      margin: 35px 0;
      font-weight: bolder;
      @media (max-width: 820px) {
      margin: 0 0 80px 0;
    }
    }
  }
}

//  我的LI標籤在RWD768寬度無法佔滿Profile_text父層的寬度
</style>
