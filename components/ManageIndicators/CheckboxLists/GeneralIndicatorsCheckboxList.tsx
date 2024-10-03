import React from "react";
import CheckboxItem from "@/components/ManageIndicators/CheckboxItem";
import IndicatorsCheckboxListLayout from "./IndicatorsCheckboxListLayout";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

export default function GeneralIndicatorsCheckboxList() {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );

     return (
          <IndicatorsCheckboxListLayout title="General">
               <CheckboxItem
                    label="sector"
                    indicator="sector"
                    isChecked={indicators.sector.isVisible}
               />
               <CheckboxItem
                    label="currency symbol"
                    indicator="currency_symbol"
                    isChecked={indicators.currency_symbol.isVisible}
               />
          </IndicatorsCheckboxListLayout>
     );
}
