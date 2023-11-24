import HistoryChart from "../Components/HistoryChart.jsx";
import CoinDetails from "../Components/CoinDetails.jsx";

export default function CryptoDetails() {
  return (
    <section className="mt-5 m-10 border border-accent rounded">
      <CoinDetails />
      <HistoryChart />
    </section>
  );
}
