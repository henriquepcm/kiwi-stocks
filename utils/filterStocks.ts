import { StocksState } from "@/lib/store/stocksSlice/stocksSliceTypes";

export const filterStocks = (
     supabaseData: StocksState,
     localStorageData: StocksState
) => {
     // get from supabase same stocks user added to localStorage
     const localStorageStocksInSupabase = supabaseData.filter((item) =>
          localStorageData.some((stock) => stock.symbol === item.symbol)
     );

     const stocksNoDuplicates = localStorageStocksInSupabase.filter(
          (item, index, self) =>
               index === self.findIndex((stock) => stock.symbol === item.symbol)
     );

     return stocksNoDuplicates;
};
