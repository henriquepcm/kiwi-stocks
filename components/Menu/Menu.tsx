import React from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { faChartLine, faList, faPlus } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, ForwardedRef } from "react";
import { RootState } from "@/lib/store/store";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";
import { StocksState } from "@/lib/store/stocksSlice/stocksSliceTypes";

const Menu = forwardRef<HTMLUListElement>(
     (_, ref: ForwardedRef<HTMLUListElement>) => {
          const stocks: StocksState = useSelector(
               (state: RootState) => state.stocks
          );
          const areThereStocks: boolean = stocks.length > 0;
          const indicators: IndicatorsState = useSelector(
               (state: RootState) => state.indicators
          );
          const areThereVisibleIndicators: boolean = Object.values(
               indicators
          ).some((ind) => ind.isVisible === true);

          return (
               <ul
                    ref={ref}
                    className="bg-kiwicolor1 w-52 absolute right-5 top-14 border-[0.1rem] border-kiwicolor2 z-50"
               >
                    <MenuItem
                         icon={areThereStocks ? faList : faPlus}
                         label={areThereStocks ? "Manage stocks" : "Add stocks"}
                         isActive={true}
                    />

                    {areThereStocks && (
                         <MenuItem
                              icon={
                                   areThereVisibleIndicators
                                        ? faChartLine
                                        : faPlus
                              }
                              label={
                                   areThereVisibleIndicators
                                        ? "Manage indicators"
                                        : "Add indicators"
                              }
                              isActive={true}
                         />
                    )}
               </ul>
          );
     }
);

// Assign a displayName for debugging purposes
Menu.displayName = "Menu";

export default Menu;
