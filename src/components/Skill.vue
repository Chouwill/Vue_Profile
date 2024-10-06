<script setup></script>

<template>
  <main>
    <div class="introduce">
      <h2>前端技能</h2>
      <div class="introduce_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tempore quasi.
        Perspiciatis praesentium repellendus esse adipisci harum temporibus? Vero ullam dolores sed
        consequatur natus praesentium inventore amet at delectus suscipit!
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #cf5d06;
  display: flex;
  justify-content: center;
  align-items: center;
  .introduce {
    margin-top: 40px;
    width: 40vw;
    border: 2px solid red;
    height: 40vh;
    
    
    h2 {
      text-align: center;
    }
  }
  .introduce_text{
    width: 20vw;
    height: 20vh;
    border: 2px solid red;
    margin: 0 auto;
  }
}
</style>
