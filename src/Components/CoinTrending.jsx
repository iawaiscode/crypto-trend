import { Link } from "react-router-dom";

export default function CoinTrending({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-3 md:grid-cols-4 mt-5 gap-4 md:m-10">
        <div className="flex items-center gap-3">
          <div className="mask mask-squircle w-12 h-12 bg-white">
            <img src={coin.large} alt={coin.name} />
          </div>
          <div className="font-semibold">{coin.name}</div>
        </div>

        <div>
          Market Cap
          <br />
          <span className="badge badge-accent badge-sm">
            {coin.market_cap_rank}
          </span>
        </div>
        <div className="hidden md:block">{coin.price_btc}</div>

        <button className="btn btn-accent btn-xs w-fit">details</button>
      </div>
    </Link>
  );
}
