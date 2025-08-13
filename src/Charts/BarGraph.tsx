
import { Bar } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Usage",
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly User Analysis (in mins) - Bar Chart",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bar-graph">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
