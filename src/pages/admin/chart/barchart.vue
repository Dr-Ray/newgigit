<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" :style="myStyles" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: { Bar },
  computed: {
    myStyles() {
      return {
        height: `${215}px`,
        position: "relative",
      };
    },
  },
  data() {
    return {
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            backgroundColor: ["#0071CE40", "#0071CE"],
            data: [3, 3.7, 3, 2.8, 4, 6, 4.3, 5, 3.8, 3.7, 3.2, 0.5],
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
