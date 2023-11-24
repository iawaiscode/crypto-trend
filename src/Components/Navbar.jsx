import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-base-100 sticky top-0 z-30">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-accent"
          >
            CryptoTrend
          </Link>
        </div>
        <div className="flex-none mr-5 gap-5">
          <Link
            className="btn btn-ghost btn-sm normal-case text-xl semi-bold border border-accent"
            to="/trending"
          >
            Trending
          </Link>
          <Link
            to="/markets"
            className="btn btn-ghost btn-sm normal-case text-xl semi-bold  border border-accent"
          >
            Markets
          </Link>
        </div>
      </nav>
    </>
  );
}
