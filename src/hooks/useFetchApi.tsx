import { useEffect, useRef, useReducer } from "react";
import { FETCH_LIST_CLIENTS } from "../constants";

const useFetchApi = (urlApi: any, idClient: any) => {
  const cancelRequest = useRef(false);

  const initialState = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: any, action: any) => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (idClient === undefined && urlApi !== FETCH_LIST_CLIENTS) return;
    const endpoint = idClient ? urlApi + idClient : urlApi;

    const fetchData = async () => {
      dispatch({ type: "loading" });
      try {
        const response = await fetch(endpoint);
        const finalResponse = await response.json();
        dispatch({ type: "fetched", payload: finalResponse });
      } catch (error) {
        dispatch({ type: "error", payload: error });
      }
    };
    cancelRequest.current = false;

    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [idClient]);

  return state;
};

export default useFetchApi;
