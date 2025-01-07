<template>
  <Doughnut :options="chartOptions" :data="chartData" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "DonoughtChart",
  components: {
    Doughnut,
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: ["#0071CE40", "#0071CE80", "#0071CE"],
            data: [60000, 30000, 10000],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
