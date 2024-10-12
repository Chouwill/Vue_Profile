<script setup></script>

<template>
  <main>
    <div class="introduce">
      <h2>自我介紹</h2>
      <div class="introduce_text">
        <span class="Role_name">I'm Chouwill</span>
        <h2>
          Web developer x Investor x Language Community Builder<br> Loving to explore new stuff,
          traveling, and building fantastic projects!
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
    width: 40vw;
    // border: 2px solid red;
    height: 40vh;
    // background-color: #F8F8F8;
    @media (max-width: 768px) {
      width: 100%;
      // height: 100vh;
      // background-color: red;
      // margin: 50px 0;
      
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
    .Role_name{
      width: 100%;
      color: rebeccapurple;
      // background-color: #fff;
      font-size: 25px;
      margin-bottom: 20px;
      
    }
    h2{
      // padding-top: 20px;
      text-align: center;
      width: 100%;
      // border: 1px solid palegreen;
      margin: 0 auto;
      line-height: 2;
      @media (max-width: 614px) {
      width: 75%;
      // background-color: red;
      font-size: 20px;
      
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
