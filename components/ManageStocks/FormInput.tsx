import { useSupabaseData } from "@/hooks/useSupabaseData";
import { setIndicatorVisibility } from "@/lib/store/indicatorsSlice/indicatorsSlice";
import { addStock } from "@/lib/store/stocksSlice/stocksSlice";
import {
     StockDataProps,
     StocksState,
} from "@/lib/store/stocksSlice/stocksSliceTypes";
import { AppDispatch, RootState } from "@/lib/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSuggestions } from "@/utils/filterSuggestions";
import { useSupabaseDataProps } from "@/hooks/useSupabaseData";

export default function FormInput() {
     const dispatch = useDispatch<AppDispatch>();
     const [input, setInput] = useState<string>("");
     const [suggestions, setSuggestions] = useState<StocksState>([]);
     const { supabaseData, isLoading }: useSupabaseDataProps =
          useSupabaseData();
     const localStorageData: StocksState = useSelector(
          (state: RootState) => state.stocks
     );
     const isSymbolIndicatorVisible: boolean = useSelector(
          (state: RootState) => state.indicators.symbol.isVisible
     );

     useEffect(() => {
          if (!input) {
               setSuggestions([]);
          }
     }, [input]);

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newSymbol = e.target.value;
          setInput(newSymbol);

          if (Array.isArray(supabaseData) && Array.isArray(localStorageData)) {
               setSuggestions(
                    filterSuggestions(supabaseData, localStorageData, newSymbol)
               );
          } else {
               setSuggestions([]);
          }
     };

     const handleSuggestionClick = (sugestion: StockDataProps) => {
          setSuggestions([]);
          dispatch(addStock(sugestion));
          setInput("");
          // Symbol needs to be visible on the screen after user adds the first stock
          if (isSymbolIndicatorVisible === false) {
               dispatch(setIndicatorVisibility({ indicator: "symbol" }));
          }
     };

     return (
          <>
               {isLoading ? (
                    <div>Loading...</div>
               ) : (
                    <div className="flex flex-col">
                         <label className="transform translate-x-4 translate-y-8 uppercase tracking-widest text-xs">
                              Symbol
                         </label>
                         <input
                              type="text"
                              value={input}
                              maxLength={8}
                              onChange={handleInputChange}
                              className="w-full h-[5rem] bg-kiwicolor1 text-kiwicolor7 border-[0.1rem] border-kiwicolor3 pl-4 pt-4 uppercase font-medium transition duration-300 focus:outline-none focus:bg-kiwicolor2"
                         ></input>
                         <div className="text-sm mt-5 tracking-wider">
                              Currently, only companies listed on the Brazilian
                              IDIV stock index are available.
                         </div>
                    </div>
               )}

               {suggestions.length > 0 && (
                    <ul className="w-96 h-56 absolute overflow-auto top-48 scrollbar-thin scrollbar-track-kiwicolor3 scrollbar-thumb-kiwicolor4 z-50">
                         {suggestions.map((suggestion, i) => (
                              <li
                                   key={i}
                                   className="bg-kiwicolor3 p-4 hover:bg-kiwicolor4"
                                   onClick={() =>
                                        handleSuggestionClick(suggestion)
                                   }
                              >
                                   <div className="text-kiwicolor5 transition duration-300 hover:translate-x-2 hover:cursor-pointer hover:text-kiwicolor7">
                                        {suggestion.symbol}
                                   </div>
                              </li>
                         ))}
                    </ul>
               )}
          </>
     );
}
