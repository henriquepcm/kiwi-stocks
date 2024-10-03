import React from "react";
import CheckboxItem from "@/components/ManageIndicators/CheckboxItem";
import IndicatorsCheckboxListLayout from "./IndicatorsCheckboxListLayout";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

export default function LiquidityIndicatorsCheckboxList() {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );

     return (
          <IndicatorsCheckboxListLayout title="Liquidity and Solvency Ratios">
               <CheckboxItem
                    label="current ratio"
                    indicator="current_ratio"
                    isChecked={indicators.current_ratio.isVisible}
               />
               <CheckboxItem
                    label="quick ratio"
                    indicator="quick_ratio"
                    isChecked={indicators.quick_ratio.isVisible}
               />
               <CheckboxItem
                    label="debt to equity"
                    indicator="debt_to_equity"
                    isChecked={indicators.debt_to_equity.isVisible}
               />
          </IndicatorsCheckboxListLayout>
     );
}
