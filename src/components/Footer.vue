<script setup></script>

<template>
  <footer>
    <ul class="community_link">
      <li>
        <a href="https://github.com/Chouwill">
          <font-awesome-icon icon="fa-brands fa-github" class="community_icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon icon="fa-solid fa-envelope" class="community_icon" />
        </a>
      </li>
      <li>
        <a href="">
          <font-awesome-icon icon="fa-brands fa-blogger" class="community_icon" />
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon icon="fa-brands fa-linkedin" class="community_icon" />
        </a>
      </li>
    </ul>
    <span>© Chouwill 2021 🇹🇼</span>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  background-color: #4a4a4a;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
  flex-direction: column;

  .community_link {
    // flex: 1;
    display: flex;
    width: 50vw;
    background-color: #4a4a4a;
    list-style: none;
    gap: 25px;
    justify-content: center;
    align-items: center;
    height: 15vh;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      width: 90vw;
      height: 70px;
    }
    li {
      width: 90px;
      height: 90px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      @media (max-width: 768px) {
        width: 70px;
        height: 70px;
      }
      @media (max-width: 414px) {
        width: 50px;
        height: 50px;
        // background-color: orange;
      }
      a {
        font-size: 25px;
        color: #000;
        .community_icon {
          color: #4a4a4a;
          font-size: 35px;
        }
      }
    }
  }

  span {
    color: #88806e;
    font-size: 20px;
  }
}
</style>
