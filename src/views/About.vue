<template>
  <div id="about">
    <div id="introduction">
      <h1>關於</h1>
      <p>
        哈囉，我是徐叡陞。
        <br />剛踏入前端沒多久，喜歡接受新知，對前端技術很感興趣。
        <br />歡迎來到我的個人網站。
      </p>
    </div>
    <hr />
    <div id="skill_box">
      <div id="expertise">
        <h1>專長</h1>
        <p>
          - 以 Semantic Elements 建構 HTML 文件
          <br />- 使用 SCSS 編寫 CSS
          <br />- ES6 與 jQuery 進行DOM操作
          <br />- 運用 Bootstrap 4 與各種套件製作網頁
          <br />- 獨立完成 RWD 網頁，且可實作 PWA
          <br />- 串接 API 資料
          <br />- SEO 優化
          <br />- Google Analytics 與 Search Console 流量分析
          <br />- 使用 github 進行版本控制
          <br />- 基礎 Illustrator 與 Photoshop
        </p>
      </div>
      <div id="bar_chart_box">
        <BarChart />
      </div>
    </div>
    <div id="link_pages">
      <router-link to="/portfolio" @click.native="$scrollToTop">看作品</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BarChart from "@/components/BarChart.vue";

export default {
  name: "About",
  components: {
    BarChart
  }
};
</script>

<style lang="scss" scoped>
#about {
  #introduction {
    padding: 30px 0;
    h1 {
      text-align: center;
      font-size: 30px;
    }
    p {
      font-size: 20px;
      text-align: center;
    }
  }
  hr {
    max-width: 1100px;
  }
  #skill_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 0;
    #bar_chart_box {
      width: 500px;
      padding: 0 10px;
    }
    #expertise {
      width: 500px;
      padding: 0 10px;
      h1 {
        font-size: 25px;
        text-align: center;
        margin: 0;
      }
      p {
        font-size: 20px;
      }
    }
  }
  #link_pages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 0;
    // margin-top: 100px;
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