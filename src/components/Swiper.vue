<template>
  <div class="carousel">
    <div class="carousel-track" ref="track">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="carousel-slide"
        :class="{ active: current === i }"
      >
        <a :href="slide.url" target="_blank" rel="noopener noreferrer">
          <img :src="slide.img" alt="works" />
          <div class="description">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.desc }}</p>
          </div>
        </a>
      </div>
    </div>
    <div class="carousel-pagination">
      <button
        v-for="(_, i) in slides"
        :key="i"
        type="button"
        class="bullet"
        :class="{ active: current === i }"
        :aria-label="'Slide ' + (i + 1)"
        @click="goTo(i)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwiperExample',
  data() {
    return {
      current: 0,
      slides: [
        {
          url: 'https://throuz.github.io/group/',
          img: require('@/assets/the_one.png'),
          title: '民宿網站 - RWD 與 PWA 實作',
          desc: '職訓課程的團體專題，我主要負責程式的編寫，使用 Boostrap 4 、Swiper、Hover.css、Aos 等套件建構網站，並且最後實作出 PWA。'
        },
        {
          url: 'https://throuz.github.io/group/',
          img: require('@/assets/the_one.png'),
          title: '民宿網站 - RWD 與 PWA 實作',
          desc: '職訓課程的團體專題，我主要負責程式的編寫，使用 Boostrap 4 、Swiper、Hover.css、Aos 等套件建構網站，並且最後實作出 PWA。'
        }
      ]
    };
  },
  mounted() {
    const track = this.$refs.track;
    if (track) {
      track.addEventListener('scroll', this.onScroll);
    }
    this.timer = setInterval(() => {
      this.current = (this.current + 1) % this.slides.length;
      this.updateScroll();
    }, 4000);
  },
  beforeDestroy() {
    const track = this.$refs.track;
    if (track) track.removeEventListener('scroll', this.onScroll);
    if (this.timer) clearInterval(this.timer);
  },
  methods: {
    onScroll() {
      const track = this.$refs.track;
      if (!track || !track.children.length) return;
      const scrollLeft = track.scrollLeft;
      const slideWidth = track.children[0].offsetWidth;
      const i = Math.round(scrollLeft / slideWidth);
      this.current = Math.max(0, Math.min(i, this.slides.length - 1));
    },
    goTo(i) {
      this.current = i;
      this.updateScroll();
    },
    updateScroll() {
      this.$nextTick(() => {
        const track = this.$refs.track;
        if (!track || !track.children[this.current]) return;
        track.children[this.current].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 625px;
  position: relative;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  height: 100%;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.carousel-slide {
  flex: 0 0 50%;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 10px solid #999;
  box-sizing: border-box;
  padding: 0 5px;

  a {
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #000;
    background-color: #fff;
    display: block;

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

.carousel-pagination {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;

  .bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    padding: 0;

    &.active {
      background: #fff;
    }
  }
}
</style>
