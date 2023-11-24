import { Link } from "react-router-dom";

export default function CryptoHome() {
  return (
    <>
      <div
        className="hero h-screen"
        style={{ backgroundImage: "url(img3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-accent">CryptoTrend</h1>
            <p className="mb-5">
              Stay ahead of the market with CryptoTrend's trending section,
              where you can discover the hottest cryptocurrencies in real-time.
              The app employs advanced algorithms to analyze market trends and
              identify the most talked-about digital assets, ensuring that you
              never miss out on potential opportunities.{" "}
            </p>
            <Link to="/trending" className="btn btn-accent mr-4">
              Trending
            </Link>

            <Link to="/markets" className="btn btn-accent">
              Markets
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
