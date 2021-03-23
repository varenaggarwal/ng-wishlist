import { useEffect, useState } from "react";
import axios from "axios";
import { useCartData } from "../contexts/dataContext";

export function useProductLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useCartData();

  useEffect(() => {
    (async function () {
      setIsLoading(() => true);
      try {
        const serverResponse = await axios.get("/api/products");
        console.log({ serverResponse });
        setIsLoading(() => false);
        dispatch({
          type: "INITIALLOAD",
          payload: serverResponse.data.products
        });
      } catch (error) {
        setError(() => error);
        setIsLoading(() => false);
      }
    })();
  }, []);
  return {};
}
