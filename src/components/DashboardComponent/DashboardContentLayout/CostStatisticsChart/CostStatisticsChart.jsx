import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `৳ ${context.formattedValue}`;
        },
      },
    },
  },
};

const labels = [
  "Jan - Feb",
  "Mar - Apr",
  "May - June",
  "July - Aug",
  "Sep - Oct",
  "Nov - Dec",
];

const dataValues = ["৳15000", "৳10000", "৳5000", "৳8000", "৳4000", "৳10000"];

const data = {
  labels,
  datasets: [
    {
      data: dataValues.map((value) => parseInt(value.replace("৳", ""))),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 0.3)",
        "rgba(54, 162, 235, 0.3)",
        "rgba(255, 206, 86, 0.3)",
        "rgba(75, 192, 192, 0.3)",
        "rgba(153, 102, 255, 0.3)",
        "rgba(255, 159, 64, 0.3)",
      ],
      borderWidth: 1,
    },
  ],
};

const CostStatisticsChart = () => {
  return (
    <div className="mt-3 p-2 bg-white rounded-lg shadow-sm flex-1">
      <h4 className="text-lg pb-5">Cost Statistics</h4>
      <div className="">
        <Doughnut
          options={options}
          data={data}
          className="max-h-60 2xl:max-h-96"
        />
      </div>
    </div>
  );
};

export default CostStatisticsChart;
