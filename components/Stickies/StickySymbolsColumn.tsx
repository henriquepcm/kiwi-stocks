"use client";

import { useEffect, forwardRef, useState } from "react";
import { useSelector } from "react-redux";
import { useIndicatorSort } from "@/hooks/useIndicatorSort";
import { createSelector } from "reselect";
import { RootState } from "@/lib/store/store";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

const StickySymbolsColumn = forwardRef((_, ref) => {
     const selectSymbols = (state: RootState) => state.stocks;

     const selecteMemoizedSymbols = createSelector([selectSymbols], (stocks) =>
          stocks.map((stock) => stock.symbol)
     );

     const symbols = useSelector(selecteMemoizedSymbols);

     const symbolsLastAddedOnTop = symbols.slice().reverse();

     const isActive = useSelector(
          (state: RootState) => state.indicators.symbol.isActive
     );

     const { handleSort } = useIndicatorSort();

     const handleIndicatorSort = (indicator: keyof IndicatorsState) => {
          handleSort(indicator);
     };

     const [topPosition, setTopPosition] = useState(5.4);

     useEffect(() => {
          const scrollContainer = (ref as React.RefObject<HTMLDivElement>)
               .current;

          if (!scrollContainer) {
               return; // Exit early if ref.current is null
          }

          const handleScroll = () => {
               const fixedSymbols = document.getElementById(
                    "sticky-symbols-column"
               );

               if (scrollContainer.scrollLeft > 130) {
                    fixedSymbols?.classList.remove("-translate-x-full");
                    fixedSymbols?.classList.add("translate-x-0");
                    fixedSymbols?.classList.remove("opacity-0");
                    fixedSymbols?.classList.add("opacity-100");

                    const currentTopPosition =
                         topPosition - scrollContainer.scrollTop / 16;

                    setTopPosition(currentTopPosition);
               } else {
                    fixedSymbols?.classList.add("-translate-x-full");
                    fixedSymbols?.classList.remove("translate-x-0");
                    fixedSymbols?.classList.add("opacity-0");
                    fixedSymbols?.classList.remove("opacity-100");
               }
          };
          if (scrollContainer) {
               scrollContainer.addEventListener("scroll", handleScroll);
          }

          return () => {
               if (scrollContainer) {
                    scrollContainer.removeEventListener("scroll", handleScroll);
               }
          };
          // Intentionally not adding dependencies.
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     return (
          <div
               id="sticky-symbols-column"
               className="opacity-0 fixed flex flex-col p-5 bg-kiwicolor3 drop-shadow-2xl transform transition -translate-x-full duration-500 ease-in-out z-30"
               style={{ top: `${topPosition}rem` }}
          >
               <div
                    className={`
                              min-w-28
                              max-w-28
                              h-10
                              pb-2
                              font-light
                              uppercase
                              text-left
                              align-top
                              tracking-widest
                              text-xs
                              transition
                              duration-300
                              hover:text-kiwicolor9
                              hover:cursor-pointer ${isActive && "border-b-[0.25rem] border-kiwicolor9"}`}
                    onClick={() => handleIndicatorSort("symbol")}
               >
                    symbol
               </div>
               <ul className="flex flex-col mt-[3.71rem] text-kiwicolor8">
                    {symbolsLastAddedOnTop.map((symbol) => (
                         <li
                              className="mb-5 pb-5 border-b-[0.05rem] border-kiwicolor4"
                              key={symbol}
                         >
                              {symbol}
                         </li>
                    ))}
               </ul>
          </div>
     );
});

StickySymbolsColumn.displayName = "StickySymbolsColumn";

export default StickySymbolsColumn;
