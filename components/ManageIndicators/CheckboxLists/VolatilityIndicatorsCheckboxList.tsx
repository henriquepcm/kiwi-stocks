import React from "react";
import CheckboxItem from "@/components/ManageIndicators/CheckboxItem";
import IndicatorsCheckboxListLayout from "./IndicatorsCheckboxListLayout";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

export default function VolatilityIndicatorsCheckboxList() {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );

     return (
          <IndicatorsCheckboxListLayout title="Volatility">
               <CheckboxItem
                    label="beta"
                    indicator="beta"
                    isChecked={indicators.beta.isVisible}
               />
          </IndicatorsCheckboxListLayout>
     );
}
