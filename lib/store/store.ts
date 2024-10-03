import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalsAndMenuReducer } from "./modalsAndMenuSlice/modalsAndMenuSlice";
import { indicatorsReducer } from "./indicatorsSlice/indicatorsSlice";
import { stocksReducer } from "./stocksSlice/stocksSlice";
import { localStorageMiddleware } from "./localStorageMiddleware/localStorageMiddleware";

const rootReducer = combineReducers({
     modalsAndMenu: modalsAndMenuReducer,
     indicators: indicatorsReducer,
     stocks: stocksReducer,
});

export const makeStore = () => {
     return configureStore({
          reducer: rootReducer,
          middleware: (getDefaultMiddleware) =>
               getDefaultMiddleware().concat(localStorageMiddleware),
     });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
