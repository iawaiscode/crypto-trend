import { currencyFormat } from "../utils.jsx";
import { TrendingDown, TrendingUp } from "../../public/Icons.jsx";
import { Link } from "react-router-dom";

export default function CoinMarkets({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-3 md:grid-cols-4 mt-5 gap-4 md:m-10 items-center">
        <div className="flex items-center gap-3">
          <div className="mask mask-squircle w-12 h-12 bg-transparent">
            <img src={coin.image} alt={coin.name} />
          </div>
          <div className="font-semibold flex flex-col">
            {coin.name}
            <span className="badge badge-secondary badge-sm">
              {currencyFormat(coin.current_price)}
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          Market Cap
          <br />
          <span className="badge badge-accent badge-sm">
            {currencyFormat(coin.market_cap)}
          </span>
        </div>
        <div
          className={`${
            coin.price_change_percentage_24h < 0 ? "text-error" : "text-success"
          } flex items-center gap-3`}
        >
          {coin.price_change_percentage_24h}
          {coin.price_change_percentage_24h < 0 ? (
            <TrendingDown />
          ) : (
            <TrendingUp />
          )}
        </div>

        <button className="btn btn-accent btn-xs w-fit">details</button>
      </div>
    </Link>
  );
}
