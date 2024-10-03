"use client";

import { useSelector } from "react-redux";
import StockDataItem from "./StockDataItem";
import { uniteAllStocksData } from "@/data/stocksData";
import { RootState } from "@/lib/store/store";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";
import { StocksState } from "@/lib/store/stocksSlice/stocksSliceTypes";

export default function StockDataItemList() {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );
     const stocks: StocksState = useSelector(
          (state: RootState) => state.stocks
     );
     const stocksLastAddedOnTop: StocksState = [...stocks].reverse();

     return (
          <tbody>
               {stocksLastAddedOnTop.length > 0 &&
                    stocksLastAddedOnTop?.map((row) => {
                         return (
                              <tr
                                   key={row.id}
                                   className="border-b-[0.05rem] border-kiwicolor4 transition duration-300 hover:bg-kiwicolor3"
                              >
                                   {uniteAllStocksData(row, indicators).map(
                                        ({ type, value, isVisible }, i) => (
                                             <StockDataItem
                                                  key={i}
                                                  type={type}
                                                  indicator={value}
                                                  isVisible={isVisible}
                                             />
                                        )
                                   )}
                              </tr>
                         );
                    })}
          </tbody>
     );
}
