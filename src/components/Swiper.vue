<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <a href="https://throuz.github.io/group/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/the_one.png" alt="works" />
          <div class="description">
            <h3>民宿網站 - RWD 與 PWA 實作</h3>
            <p>職訓課程的團體專題，我主要負責程式的編寫，使用 Boostrap 4 、Swiper、Hover.css、Aos 等套件建構網站，並且最後實作出 PWA。</p>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="https://throuz.github.io/group/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/the_one.png" alt="works" />
          <div class="description">
            <h3>民宿網站 - RWD 與 PWA 實作</h3>
            <p>職訓課程的團體專題，我主要負責程式的編寫，使用 Boostrap 4 、Swiper、Hover.css、Aos 等套件建構網站，並且最後實作出 PWA。</p>
          </div>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-3d-coverflow",
  title: "3D Coverflow effect",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.example-3d {
  width: 100%;
  height: 625px;
  // padding-bottom: 40px;
}
.swiper {
  height: 100%;
  .swiper-slide {
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 10px solid #999999;
    box-sizing: border-box;
    a {
      height: 100%;
      text-decoration: none;
      color: rgb(0, 0, 0);
      background-color: rgb(255, 255, 255);
      img {
        width: 100%;
        height: 65%;
        object-fit: cover;
      }
      .description {
        width: 100%;
        height: 35%;
        h3 {
          font-size: 25px;
          margin: 0;
          padding: 10px 0;
          text-align: center;
        }
        p {
          font-size: 20px;
          margin: 0;
          padding: 0 60px;
        }
      }
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: white;
    }
  }
}
</style>