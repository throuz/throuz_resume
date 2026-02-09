<template>
  <div class="bar-chart">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'BarChart',
  data() {
    return {
      labels: [
        'HMTL5',
        'CSS3',
        'ES6',
        'jQuery',
        'Boostrap4',
        'Vue.js',
        'Illustrator',
        'Photoshop'
      ],
      values: [96, 91, 80, 74, 63, 50, 49, 45],
      barColor: '#42b983',
      barHeight: 15
    };
  },
  mounted() {
    this.$nextTick(() => this.draw());
    window.addEventListener('resize', this.draw);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.draw);
  },
  methods: {
    draw() {
      const canvas = this.$refs.canvas;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height || 400;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);

      const padding = { top: 40, right: 20, bottom: 20, left: 20 };
      const chartW = w - padding.left - padding.right;
      const chartH = h - padding.top - padding.bottom;
      const maxVal = Math.max(...this.values);
      const gap = 12;
      const barH = Math.min(this.barHeight, (chartH - gap * (this.labels.length - 1)) / this.labels.length);

      ctx.clearRect(0, 0, w, h);
      ctx.font = '20px "Microsoft JhengHei", sans-serif';
      ctx.fillStyle = '#000';

      this.labels.forEach((label, i) => {
        const val = Array.isArray(this.values[i]) ? this.values[i][1] : this.values[i];
        const barW = (val / maxVal) * (chartW - 40);
        const y = padding.top + i * (barH + gap) + barH / 2;

        ctx.textAlign = 'left';
        ctx.fillText(label, padding.left, y + 5);
        ctx.fillStyle = this.barColor;
        ctx.fillRect(padding.left + 120, y - barH / 2, barW, barH);
        ctx.fillStyle = '#000';
      });

      ctx.font = '25px "Microsoft JhengHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('技能', w / 2, 25);
    }
  }
};
</script>

<style scoped>
.bar-chart {
  width: 100%;
  height: 400px;
}
</style>
