import { useReducer } from "react";
import { LOGIN_EMPLOYEE } from "../constants";

const useAuthEmployees = () => {
  const initialState = {
    error: undefined,
    data: undefined,
  };

  const authReducer = (state: any, action: any) => {
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

  const [state, dispatch] = useReducer(authReducer, initialState);

  const authEmployeer = async (credentials: any) => {
    dispatch({ type: "loading" });
    try {
      const call = await fetch(LOGIN_EMPLOYEE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: credentials.username,
          password: credentials.password,
        }),
      });
      const responseData = await call.json();
      dispatch({ type: "fetched", payload: responseData });
    } catch (error) {
      dispatch({ type: "error", payload: error });
    }
  };

  // Devuelve solo los datos y el error, y una función "login"
  return { data: state.data, error: state.error, login: authEmployeer };
};

export default useAuthEmployees;
