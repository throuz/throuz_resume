<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "HMTL5",
          "CSS3",
          "ES6",
          "jQuery",
          "Boostrap4",
          "Vue.js",
          "Illustrator",
          "Photoshop"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#42b983",
            data: [96, 91, 80, 74, 63, [0, 50], 49, 45],
            barThickness: 15
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "技能",
          fontColor: "#000",
          fontSize: 25,
          fontFamily: "Microsoft JhengHei"
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#000",
                fontSize: 20,
                fontFamily: "Microsoft JhengHei"
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    );
  }
};
</script>