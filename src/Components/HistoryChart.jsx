import useAxios from "../hooks/useAxios.jsx";
import { useParams } from "react-router-dom";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);
export default function HistoryChart() {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`,
  );

  const { error } = useAxios();
  if (error) {
    return (
      <>
        <div className="toast">
          <div className="alert alert-error">
            {error.message}: Please Try Later
          </div>
        </div>
      </>
    );
  }
  const coinChartData = response.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));
  const options = {
    responsive: true,
  };
  const data = {
    labels: coinChartData.map((dataPoint) => dataPoint.x),
    datasets: [
      {
        label: id,
        fill: true,
        data: coinChartData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.1)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
