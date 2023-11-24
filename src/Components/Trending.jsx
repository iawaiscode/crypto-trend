import useAxios from "../hooks/useAxios.jsx";
import CoinTrending from "./CoinTrending.jsx";

export default function Trending() {
  const { response } = useAxios("/search/trending");
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
    <>
      <section className="m-5 border border-accent p-4 rounded-lg">
        <h1
          id="trending"
          className=" text-center font-bold text-2xl mt-2 underline decoration-4 decoration-accent"
        >
          Trending
        </h1>
        {response &&
          response.coins.map((coin) => (
            <CoinTrending key={coin.item.coin_id} coin={coin.item} />
          ))}
      </section>
    </>
  );
}
