"use client";

import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import IndicatorLabel from "./IndicatorLabel";
import { AppDispatch, RootState } from "@/lib/store/store";
import { useIndicatorSort } from "@/hooks/useIndicatorSort";
import { uniteAllIndicatorLabels } from "@/data/indicatorLabelsData";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";
import { getLocalStorageData } from "@/utils/getLocalStorageData";
import { loadIndicators } from "@/lib/store/indicatorsSlice/indicatorsSlice";

export default function IndicatorLabelList() {
     const localStorageIndicators = useMemo(() => {
          return getLocalStorageData<IndicatorsState>("indicators");
     }, []);

     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );
     const areThereStocks = useSelector(
          (state: RootState) => Object.keys(state.stocks).length > 0
     );
     const { handleSort } = useIndicatorSort();
     const dispatch = useDispatch<AppDispatch>();

     const handleIndicatorSort = (indicator: keyof IndicatorsState) => {
          handleSort(indicator);
     };

     useEffect(() => {
          if (Object.keys(localStorageIndicators).length !== 0) {
               dispatch(loadIndicators(localStorageIndicators));
          }
     }, [dispatch, localStorageIndicators]);

     return (
          <thead>
               {areThereStocks && (
                    <tr>
                         {uniteAllIndicatorLabels(indicators).map(
                              (
                                   { label, indicatorKey, isActive, isVisible },
                                   i
                              ) => (
                                   <IndicatorLabel
                                        key={i}
                                        label={label}
                                        indicatorKey={indicatorKey}
                                        isActive={isActive}
                                        isVisible={isVisible}
                                        onSort={handleIndicatorSort}
                                   />
                              )
                         )}
                    </tr>
               )}
          </thead>
     );
}
