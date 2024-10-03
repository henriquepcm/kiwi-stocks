"use client";

import { useEffect, forwardRef, useState } from "react";
import { useSelector } from "react-redux";
import { uniteAllIndicatorLabels } from "@/data/indicatorLabelsData";
import { useIndicatorSort } from "@/hooks/useIndicatorSort";
import { RootState } from "@/lib/store/store";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

const StickyIndicatorsRow = forwardRef<HTMLDivElement | null>((_, ref) => {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );
     const { handleSort } = useIndicatorSort();

     const handleIndicatorSort = (indicator: keyof IndicatorsState) => {
          handleSort(indicator);
     };
     const [leftPosition, setLeftPosition] = useState(1);

     useEffect(() => {
          const scrollContainer = (ref as React.RefObject<HTMLDivElement>)
               .current;

          if (!scrollContainer) {
               return; // Exit early if ref.current is null
          }

          const handleScroll = () => {
               const fixedIndicators = document.getElementById(
                    "sticky-indicators-row"
               );

               if (scrollContainer.scrollTop > 55) {
                    fixedIndicators?.classList.add("translate-y-0");
                    fixedIndicators?.classList.remove("-translate-y-full");
                    fixedIndicators?.classList.add("opacity-100");
                    fixedIndicators?.classList.remove("opacity-0");

                    const currentLeftPosition =
                         leftPosition - scrollContainer.scrollLeft / 16;

                    setLeftPosition(currentLeftPosition);
               } else {
                    fixedIndicators?.classList.remove("translate-y-0");
                    fixedIndicators?.classList.add("-translate-y-full");
                    fixedIndicators?.classList.remove("opacity-100");
                    fixedIndicators?.classList.add("opacity-0");
               }
          };
          if (scrollContainer) {
               scrollContainer.addEventListener("scroll", handleScroll);
          }

          // cleanup listener on unmount
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
               id="sticky-indicators-row"
               className="opacity-100 h-24 pt-5 pl-2 pb-2 fixed flex bg-kiwicolor3 drop-shadow-2xl top-20 transform transition -translate-y-full duration-500 ease-in-out z-20"
               style={{ left: `${leftPosition}rem` }}
          >
               <ul className="flex uppercase tracking-widest text-xs">
                    {uniteAllIndicatorLabels(indicators).map(
                         ({ label, indicatorKey, isActive, isVisible }, i) =>
                              isVisible && (
                                   <li
                                        key={i}
                                        className={`
                              min-w-36
                              max-w-36
                              pb-2
                              pr-10
                              font-light
                              uppercase
                              text-left
                              align-top
                              tracking-widest
                              text-xs
                              transition
                              duration-300
                              hover:text-kiwicolor9
                              hover:cursor-pointer`}
                                        onClick={() =>
                                             handleIndicatorSort(indicatorKey)
                                        }
                                   >
                                        <div
                                             className={`${isActive && "w-[99%] pb-5 border-b-[0.25rem] border-kiwicolor9"}`}
                                        >
                                             {label}
                                        </div>
                                   </li>
                              )
                    )}
               </ul>
          </div>
     );
});

StickyIndicatorsRow.displayName = "StickyIndicatorsRow";

export default StickyIndicatorsRow;
