import { isAxiosError } from "axios";
import axios from "../api";
import { useCallback, useEffect, useMemo, useState } from "react";

const useAxios = (url, method = "GET", options = {}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const stableOptions = useMemo( () =>JSON.stringify(options), [options]);

  const fetchData = useCallback( async() => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios({
        url,
        method,
        ...options,
      });
      console.log(
        "%c RESPONSE DATA",
        "color: white; background: green; font-size: 14px; padding: 2px 6px; border-radius: 3px;"
      );
      console.log(data);

      console.log(
        "%c END RESPONSE DATA",
        "color: white; background: green; font-size: 14px; padding: 2px 6px; border-radius: 3px;"
      );

      setData(data);
    } catch (err) {
      let error = null;

      if (isAxiosError(err)) {
        console.error("AXIOS ERROR", err.response.data.message);
        error = err.response.data.message;
      } else {
        console.error("API ERROR", err);
        error = err.message || "An unexpected error occurred";
      }

      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, method, stableOptions]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
};

export default useAxios;
