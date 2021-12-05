<template>
  <div class="col-xl-4">
    <!--begin::Charts Widget 2-->
    <div class="card card-custom  card-stretch gutter-b">
      <!--begin::Header-->
      <div class="card-header h-auto border-0">
        <!--begin::Title-->
        <div class="card-title py-5">
          <h3 class="card-label">
            <span class="d-block text-dark font-weight-bolder">{{ $t('expenses') }} </span>
            <span class="d-block text-dark-50 mt-2 font-size-sm">More than 500+ new orders</span>
          </h3>
        </div>
        <!--end::Title-->
      <!--end::Toolbar-->
      </div>
      <!--end::Header-->
            <!--begin::Body-->
      <div class="card-body d-flex flex-column">
        <div class="chart">
          <BarChart :data="barChartData" :options="barChartOptions" :height="400" class="BarChart" />
        </div>
        
      

        <div class="pt-5">
          <p class="text-center font-weight-normal font-size-lg pb-7">
            {{ $t('expensesMessage') }}
          </p>
          <a
          @click="printWindow()"
            href="#"
            class="
              btn btn-primary btn-shadow-hover
              font-weight-bolder
              w-100
              py-3
            "
            >{{ $t('dashboard1.generateReport') }}</a
          >
        </div>
      </div>
      <!--end::Body-->
    </div>
    <!--end::Charts Widget 2-->
  </div>
</template>

<script>
import BarChart from "~/components/charts/BarChart.vue";
export default {
  components: { BarChart },
  data() {
    return {
      barChartData: {
        labels: [
          "2019-06",
          "2019-07",
          "2019-08",
        ],
        datasets: [
          {
            label: "Visualizaciones",
            data: [2, 1, 16, 3, 4, 5, 0, 0, 4, 12, 2],
            backgroundColor: "rgba(20, 255, 0, 0.3)",
            borderColor: "rgba(100, 255, 0, 1)",
            borderWidth: 2,
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Google analytics data",
          fontSize: 24,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 7,
                min: 0,
                stepSize: 1,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
    };
  },

  methods:{
    printWindow: function () {		
	 window.print();
    }
  }
  
}
</script>

<style scoped>
.BarChart{
  height: 200px;
}

</style>
