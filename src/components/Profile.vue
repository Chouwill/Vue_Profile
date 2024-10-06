<script setup></script>

<template>
  <main>
    <div class="Profile">
      <div class="Profile_title_box">
        <h2>個人檔案</h2>
        <span>Profile</span>
      </div>
      <ul class="Profile_text">
        <li></li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  // background-color: #11a728;
  background-color: rgba(255, 255, 255, 0.5); /* 使用半透明白色背景 */
  background-color: rgba(255, 255, 255, 0.321); /* 使用半透明白色背景 */

  display: flex;
  justify-content: center;
  align-items: center;
  //   background-image: url('/src/image/Pngtree_15533603_BG.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: lighten; /* 混合模式，使背景圖片變淡 */

  width: 100%;
  height: 100vh;
  .Profile {
    margin-top: 40px;
    width: 40vw;
    border: 2px solid red;
    height: 40vh;
    display: flex;
    justify-content: center;
    .Profile_title_box{
        background-color: indianred;
        width: 50%;
        text-align: center;
        h2{
            text-align: center;
            font-size: 2.5em;
            // color: #c1c1c1;
        }
        span{
            // background-color: indianred;
            font-size: 1.6em;
            color: #c1c1c1;

        }
        
    }
    
  }
  .introduce_text {
    width: 100%;
    height: 25vh;
    border: 2px solid red;
    margin: 0 auto;
    text-align: center;
    line-height: 2;
    .Role_name {
      width: 100%;
      color: rebeccapurple;
      background-color: #fff;
      font-size: 25px;
      margin-bottom: 20px;
    }
    h2 {
      // padding-top: 20px;
      text-align: center;
      width: 100%;
      border: 1px solid palegreen;
      margin: 0 auto;
      line-height: 2;
    }
  }
}
</style>
