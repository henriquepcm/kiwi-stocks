import IndicatorLabelList from "./Indicators/IndicatorLabelList";
import StockDataItemList from "@/components/MainContent/Stocks/StockDataItemList";
import { useSupabaseData } from "@/hooks/useSupabaseData";
import { loadStocks } from "@/lib/store/stocksSlice/stocksSlice";
import { filterStocks } from "@/utils/filterStocks";
import { getLocalStorageData } from "@/utils/getLocalStorageData";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StocksState } from "@/lib/store/stocksSlice/stocksSliceTypes";
import { AppDispatch, RootState } from "@/lib/store/store";
import { useSupabaseDataProps } from "@/hooks/useSupabaseData";

export default function IndicatorsAndStocksTable() {
     const stocks: StocksState = useSelector(
          (state: RootState) => state.stocks
     );
     const { supabaseData, isLoading }: useSupabaseDataProps =
          useSupabaseData();

     const [localStorageData] = useState<StocksState>(
          getLocalStorageData("stocks")
     );

     const dispatch: AppDispatch = useDispatch();

     useEffect(() => {
          if (!isLoading && Array.isArray(supabaseData)) {
               const filteredStocks = filterStocks(
                    supabaseData,
                    localStorageData
               );

               if (filteredStocks) {
                    dispatch(loadStocks(filteredStocks));
               }
          }
          // Intentionally not adding other dependencies, it should render only on mount.
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [isLoading]);

     return (
          <>
               {stocks.length === 0 && (
                    <div className="flex w-full h-[64%] items-center justify-center">
                         {isLoading
                              ? "Loading..."
                              : `No stocks have been added yet. Add them by clicking on the ellipsis menu in the upper-right corner.`}
                    </div>
               )}
               <table className="max-w-fit mt-5">
                    <caption className="sr-only">Stock Data Table</caption>
                    <IndicatorLabelList />
                    <StockDataItemList />
               </table>
          </>
     );
}
