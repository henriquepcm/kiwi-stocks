import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";
import React from "react";

interface IndicatorLabelProps {
     label: string;
     indicatorKey: keyof IndicatorsState;
     isActive: boolean;
     isVisible: boolean;
     onSort: (indicatorKey: keyof IndicatorsState) => void;
}

export default function IndicatorLabel({
     label,
     indicatorKey,
     isActive,
     isVisible,
     onSort,
}: IndicatorLabelProps) {
     return (
          isVisible && (
               <th
                    scope="col"
                    className={`
                              
                              h-20
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
                    onClick={() => onSort(indicatorKey)}
               >
                    <div
                         className={`${isActive && "w-[99%] pb-5 border-b-[0.25rem] border-kiwicolor9"}`}
                    >
                         {label}
                    </div>
               </th>
          )
     );
}
