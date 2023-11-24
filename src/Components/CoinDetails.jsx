import useAxios from "../hooks/useAxios.jsx";
import { useParams } from "react-router-dom";

export default function CoinDetails() {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`,
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
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-5xl font-bold">{response.name}</h1>
            <img
              src={response.image.small}
              alt={response.name}
              className="max-w-sm rounded-lg shadow-2xl bg-white"
            />
          </div>
          <div className="text-center">
            <p
              className="py-6"
              dangerouslySetInnerHTML={{ __html: response.description.en }}
            ></p>
            <p className="text-accent text-lg">View Charts below</p>
          </div>
        </div>
      </div>
    </>
  );
}
