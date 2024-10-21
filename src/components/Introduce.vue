<script setup></script>

<template>
  <main ref="Introduce" class="section">
    <div class="introduce">
      <div class="introduce_text">
        <span class="Role_name">我是暐洺</span>
        <h2>
          前端工程師 x 技術探索者 x 使用者體驗提升者<br />
          熱衷於探索新的前端技術，提升使用者的滿意度，並促進開發效率和便利性！
        </h2>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  // background-color: #11a728;

  background-color: rgba(255, 255, 255, 0.321); /* 使用半透明白色背景 */

  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/src/image/Pngtree_15533603_BG.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: lighten; /* 混合模式，使背景圖片變淡 */

  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    // background-color: #d8e70d;

    height: auto;
  }
  .introduce {
    margin-top: 40px;
    width: 50vw;
    // border: 2px solid red;
    height: 40vh;
    // background-color: #F8F8F8;
    @media (max-width: 768px) {
      width: 100%;
      // height: 100vh;
      // background-color: red;
      // margin: 50px 0;
      // border: 2px solid rgb(45, 26, 98);
    }
    h2 {
      text-align: center;
    }
  }
  .introduce_text {
    width: 100%;
    height: 25vh;
    // border: 2px solid red;
    margin: 0 auto;
    text-align: center;
    line-height: 1.5;
    @media (max-width: 768px) {
      width: 80%;
      // height: 100vh;
      // background-color: red;
      // margin: 50px 0;
      // border: 20px solid rgb(6, 162, 51);
    }
    @media (max-width: 614px) {
      width: 80%;
      height: auto;
    }
    .Role_name {
      width: 100%;
      // color: #000;
      font-weight: bolder;
      // background-color: #fff;
      font-size: 35px;
      margin-bottom: 20px;
      // color: #19347c;
      color: #ffffff;
    }
    h2 {
      font-size: 27px;
      // padding-top: 20px;
      text-align: center;
      width: 100%;
      // border: 1px solid palegreen;
      margin: 0 auto;
      line-height: 3;
      // color: rgb(16, 15, 15);
      color: #ffffff;
      // color: #19347c;
      @media (max-width: 614px) {
        width: 75%;
        // background-color: red;
        font-size: 20px;
        line-height: 2;
      }
      @media (max-width: 414px) {
        // width: 75%;
        // background-color: red;
        font-size: 18px;
        line-height: 1.3;
      }
    }
  }
}
</style>
