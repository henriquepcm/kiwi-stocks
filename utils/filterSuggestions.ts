import { StocksState } from "@/lib/store/stocksSlice/stocksSliceTypes";

export const filterSuggestions = (
     database1: StocksState,
     database2: StocksState,
     valueToFilter: string
) => {
     const data = database1
          .filter((item) => item.symbol.includes(valueToFilter.toUpperCase()))
          .filter(
               (item) =>
                    !database2.some((stock) => stock.symbol === item.symbol)
          );

     return data;
};
