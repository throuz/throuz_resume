<template>
  <div class="carousel">
    <div class="carousel-viewport" @touchstart="onTouchStart" @touchend="onTouchEnd" @mousedown="onMouseDown"
      @mouseup="onMouseUp" @mouseleave="onMouseLeave">
      <div class="carousel-track" :style="trackStyle">
        <div v-for="(slide, i) in slides" :key="i" class="carousel-slide">
          <a :href="slide.url" target="_blank" rel="noopener noreferrer">
            <img :src="slide.img" alt="works" />
            <div class="description">
              <h3>{{ slide.title }}</h3>
              <p>{{ slide.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="carousel-pagination">
      <button v-for="(_, i) in slides" :key="i" type="button" class="bullet" :class="{ active: current === i }"
        :aria-label="'第 ' + (i + 1) + ' 張'" @click="goTo(i)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwiperExample',
  data() {
    return {
      current: 0,
      timer: null,
      touchStartX: 0,
      touchEndX: 0,
      mouseStartX: 0,
      mouseEndX: 0,
      slides: [
        {
          url: 'https://throuz.github.io/group/',
          img: require('@/assets/the_one.png'),
          title: '民宿網站 - RWD 與 PWA 實作',
          desc: '職訓課程的團體專題，我主要負責程式的編寫，使用 Boostrap 4 、Swiper、Hover.css、Aos 等套件建構網站，並且最後實作出 PWA。'
        },
        {
          url: 'https://throuz.github.io/practice/api_message%20board/',
          img: require('@/assets/message_board.png'),
          title: '留言板',
          desc: '具備標題、內容、超連結與圖片連結的表單介面，可新增留言與清除內容。'
        },
        {
          url: 'https://throuz.github.io/practice/one_page_website/',
          img: require('@/assets/piano_website.png'),
          title: 'Rusheng piano 鋼琴網站',
          desc: '鋼琴主題網站，包含古代鋼琴、現代鋼琴、鋼琴結構、演奏方法、鋼琴品牌、電子鋼琴等導覽。'
        }
      ]
    };
  },
  computed: {
    trackStyle() {
      return {
        transform: `translateX(-${this.current * 100}%)`
      };
    }
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
  methods: {
    startTimer() {
      this.stopTimer();
      this.timer = setInterval(() => {
        this.current = (this.current + 1) % this.slides.length;
      }, 4000);
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    goTo(i) {
      this.current = i;
      this.startTimer();
    },
    next() {
      this.current = (this.current + 1) % this.slides.length;
      this.startTimer();
    },
    prev() {
      this.current = this.current === 0 ? this.slides.length - 1 : this.current - 1;
      this.startTimer();
    },
    onTouchStart(e) {
      this.touchStartX = e.changedTouches ? e.changedTouches[0].screenX : e.touches[0].screenX;
      this.stopTimer();
    },
    onTouchEnd(e) {
      this.touchEndX = e.changedTouches ? e.changedTouches[0].screenX : e.touches[0].screenX;
      this.handleSwipe();
      this.startTimer();
    },
    onMouseDown(e) {
      this.mouseStartX = e.clientX;
      this.stopTimer();
    },
    onMouseUp(e) {
      this.mouseEndX = e.clientX;
      this.handleSwipe();
      this.startTimer();
    },
    onMouseLeave() {
      this.mouseEndX = this.mouseStartX;
      this.startTimer();
    },
    handleSwipe() {
      const dx = this.touchEndX ? this.touchEndX - this.touchStartX : this.mouseEndX - this.mouseStartX;
      const threshold = 50;
      if (dx < -threshold) this.next();
      else if (dx > threshold) this.prev();
      this.touchStartX = 0;
      this.touchEndX = 0;
      this.mouseStartX = 0;
      this.mouseEndX = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  max-width: 900px;
  height: 625px;
  margin: 0 auto;
  position: relative;
}

.carousel-viewport {
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.4s ease-out;
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 10px solid #999;
  padding: 0 5px;

  a {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #000;
    background-color: #fff;

    img {
      display: block;
      width: 100%;
      height: 65%;
      object-fit: cover;
    }

    .description {
      width: 100%;
      height: 35%;
      box-sizing: border-box;

      h3 {
        font-size: 25px;
        margin: 0;
        padding: 10px 0;
        text-align: center;
      }

      p {
        font-size: 20px;
        margin: 0;
        padding: 0 20px;
      }
    }
  }
}

.carousel-pagination {
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  pointer-events: none;
}

.carousel-pagination .bullet {
  pointer-events: auto;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }

  &.active {
    background: #fff;
  }
}
</style>
