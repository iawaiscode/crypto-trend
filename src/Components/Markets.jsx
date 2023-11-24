import useAxios from "../hooks/useAxios.jsx";
import CoinMarkets from "./CoinMarkets.jsx";

export default function Markets() {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
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
  return (
    <section className="m-5 border border-accent p-4 rounded-lg">
      <h1
        id="markets"
        className="text-center font-bold text-2xl mt-2 underline decoration-4 decoration-accent"
      >
        Markets
      </h1>
      {response &&
        response.map((coin) => <CoinMarkets coin={coin} key={coin.id} />)}
    </section>
  );
}
