import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StocksState, StockDataProps } from "./stocksSliceTypes";

const initialState: StocksState = [];

const stocksSlice = createSlice({
     name: "stocks",
     initialState,
     reducers: {
          loadStocks: (state, action: PayloadAction<StocksState>) => {
               state.push(...action.payload);
          },
          addStock: (state, action: PayloadAction<StockDataProps>) => {
               state.push(action.payload);
          },
          deleteStock: (
               state,
               action: PayloadAction<{ symbol: string | null }>
          ) => {
               const { symbol } = action.payload;
               return state.filter((element) => element.symbol !== symbol);
          },
          sortStocks: (
               state,
               action: PayloadAction<{
                    indicator: keyof StockDataProps;
                    toggleOrder: boolean;
               }>
          ) => {
               const { indicator, toggleOrder } = action.payload;

               const order = toggleOrder ? 1 : -1;
               // toggle between ASC and DESC
               state.sort((a, b) => {
                    const indicatorA = a[indicator];
                    const indicatorB = b[indicator];

                    if (indicatorA == null) return 1 * order;
                    if (indicatorB == null) return -1 * order;

                    if (indicatorA < indicatorB) return -1 * order;
                    if (indicatorA > indicatorB) return 1 * order;
                    return 0;
               });
          },
     },
});

export const { loadStocks, addStock, deleteStock, sortStocks } =
     stocksSlice.actions;
export const stocksReducer = stocksSlice.reducer;
