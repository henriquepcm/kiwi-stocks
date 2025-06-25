import React from "react";
import StockCardItem from "./StockCardItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store/store";
import { deleteStock } from "@/lib/store/stocksSlice/stocksSlice";
import { setIndicatorVisibility } from "@/lib/store/indicatorsSlice/indicatorsSlice";
import { StocksState } from "@/lib/store/stocksSlice/stocksSliceTypes";

export default function StockCardItemList() {
     const stocks: StocksState = useSelector(
          (state: RootState) => state.stocks
     );
     const stocksLastAddedOnTop: StocksState = stocks.slice().reverse();
     const dispatch = useDispatch<AppDispatch>();

     const handleDeleteStock = (symbol: string | null) => {
          dispatch(deleteStock({ symbol }));
          // Symbol indicator needs to be removed from screen if user deletes all stocks
          if (stocks.length === 1) {
               dispatch(setIndicatorVisibility({ indicator: "symbol" }));
          }
     };

     return (
          <ul className="grid grid-cols-2 gap-3 mt-10 top-48 overflow-auto overflow-x-hidden scrollbar-thin scrollbar-track-kiwicolor1 scrollbar-thumb-kiwicolor2">
               {stocksLastAddedOnTop.map((stock, index) => (
                    <StockCardItem
                         key={index}
                         symbol={stock.symbol}
                         onClick={() => handleDeleteStock(stock.symbol)}
                    />
               ))}
          </ul>
     );
}
