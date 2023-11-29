import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getCurrentMonth = () => {
  const currentDate = new Date();
  return currentDate.getMonth(); // Returns the index of the current month (0-indexed)
};

const dataValues = [15, 8, 10, 3, 5, 7, 10, 3, 5, 2, 10, 13];

const highlightColor = "#A3CCFF"; // Choose a highlight color for the running month

const data = {
  labels,
  datasets: [
    {
      data: dataValues,
      backgroundColor: labels.map((_, index) =>
        index === getCurrentMonth() ? highlightColor : "#D5E6FB"
      ),
      borderRadius: 5,
    },
  ],
};

const BookingStatisticsChart = () => {
  return (
    <div className="lg:w-1/2 mt-3 p-5 bg-white rounded-lg shadow-sm">
      <h4 className="text-lg pb-5">Booking Statistics</h4>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BookingStatisticsChart;
