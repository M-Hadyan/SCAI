<script>

import { Doughnut } from "vue-chartjs";
import Chart from "chart.js";

export default {
extends: Doughnut,
  data: () => ({
  chartdata: {
  labels: ["Food", "Home", "Car"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: ["#4f008c", "#7233A3", "#00c48c"],
      data: [30, 65, 5]
      }
     ]
     },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  }
}),

mounted() {
  this.addPlugin({
    id: 'my-plugin',
    beforeDraw: function(chart) {}
  })
  this.renderChart(this.chartdata, this.options);
},

methods: {
  textCenter(val) {
    Chart.pluginService.register({
      beforeDraw: function(chart) {
        var width = chart.chart.width;
        var height = chart.chart.height;
        var ctx = chart.chart.ctx;

        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        var text = val;
        var textX = Math.round((width - ctx.measureText(text).width) / 2);
        var textY = height / 2;

         ctx.fillText(text, textX, textY);
         ctx.save();
       }
     });

     Chart.plugins.unregister(this.chartdata);
   }
 }};
 //*** end Doughnut chat ***//
</script>
