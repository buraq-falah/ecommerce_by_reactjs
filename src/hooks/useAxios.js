import { isAxiosError } from "axios";
import axios from "../api";
import { useCallback, useEffect, useMemo, useState } from "react";

const useAxios = (url, method = "GET", options = {}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // جعل options stable
  const stableOptions = useMemo(() => options, [JSON.stringify(options)]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios({
        url,
        method,
        ...stableOptions,
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
      let errorMessage;
      if (isAxiosError(err)) {
        errorMessage = err.response?.data?.message || err.message;
        console.error("AXIOS ERROR", errorMessage);
      } else {
        errorMessage = err.message || "An unexpected error occurred";
        console.error("API ERROR", err);
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [url, method, stableOptions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // لازم يرجع data, error, loading
  return { data, error, loading };
};

export default useAxios;
