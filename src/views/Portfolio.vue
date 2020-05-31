<template>
  <div id="portfolio">
    <h1>作品</h1>
    <Swiper />
    <div id="link_pages">
      <router-link to="/" @click.native="$scrollToTop">關於我</router-link>
    </div>
  </div>
</template>

<script> 
// @ is an alias to /src
import Swiper from "@/components/Swiper.vue";

export default {
  name: "Portfolio",
  components: {
    Swiper
  }
};
</script>

<style lang="scss" scoped>
#portfolio {
  padding-top: 30px;
  h1 {
    text-align: center;
    font-size: 30px;
  }
  #link_pages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 0;

    a {
      color: #fff;
      text-decoration: none;
      padding: 10px 30px;
      background-color: #4a8a98;
      font-size: 20px;
      margin: 0 20px;
      transition-duration: 0.3s;

      &:hover {
        background-color: #929cbd;
      }
    }
  }
}
</style>