import { useEffect, useState } from "react";
import axios from "axios";

export default function useAxios(params) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  axios.defaults.baseURL = "https://api.coingecko.com/api/v3";
  const fetchData = async (params) => {
    try {
      setLoading(true);
      const res = await axios(params);
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(params);
  }, []);
  return { response, loading, error };
}
