import { Middleware } from "redux";
import { RootState } from "../store";

export const localStorageMiddleware: Middleware<unknown, RootState> =
     (storeAPI) => (next) => (action) => {
          const result = next(action);

          const { stocks, indicators } = storeAPI.getState();

          localStorage.setItem("stocks", JSON.stringify(stocks));
          localStorage.setItem("indicators", JSON.stringify(indicators));

          return result;
     };
