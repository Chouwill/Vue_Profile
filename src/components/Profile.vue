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
            <h2>學習寫程式的過程中也不忘將學習經驗紀錄下來！ 同時也熱愛分享生活體會與閱讀心得!</h2>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="Profile_icon_container">
              <font-awesome-icon icon="fa-brands fa-linkedin" class="Profile_icon" />
            </div>
            <h2>Linkedin</h2>
            <h2>個人求學經歷 &工作經驗</h2>
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
    border: 2px solid red;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;

    .Profile_title_box {
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
    .Profile_text {
      width: 100%;
      height: auto;
      // border: 5px solid rgb(18, 173, 70);
      margin: 0 auto;
      text-align: center;
      line-height: 2;
      display: flex;
      gap: 25px;
      @media (max-width: 768px) {
        // background-color: #d8e70d;
        flex-direction: column;
      }

      li {
        // border: 2px solid #000;
        width: 33.3%;
        // height: 500px;
        padding: 50px 0;
        @media (max-width: 768px) {
          // background-color: #d8e70d;
          width: 100%;
        }
        &:nth-child(3) {
          margin-right: 25px;
          // border: 2px solid red;
        }
        a {
          color: #000;
          .Profile_icon_container {
            width: 150px; /* 調整為所需的圓形大小 */
            height: 150px; /* 調整為所需的圓形大小 */
            background-color: #f8f8f8; /* 圓形背景顏色 */
            border-radius: 50%; /* 使其成為圓形 */
            display: flex;
            justify-content: center;
            align-items: center; /* 垂直和水平居中對齊圖標 */
            margin: 0 auto; /* 使圓形容器居中 */
            &:hover {
              background-color: #66d6c5;
            }
            .Profile_icon {
              font-size: 70px;
            }
          }
          h2 {
            color: #c1c80a;
          }
          .Profile_context {
            color: orange;
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
</style>
