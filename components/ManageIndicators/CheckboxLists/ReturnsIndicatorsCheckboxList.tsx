import React from "react";
import CheckboxItem from "@/components/ManageIndicators/CheckboxItem";
import IndicatorsCheckboxListLayout from "./IndicatorsCheckboxListLayout";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

export default function ReturnsIndicatorsCheckboxList() {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );

     return (
          <IndicatorsCheckboxListLayout title="Returns">
               <CheckboxItem
                    label="return on assets"
                    indicator="return_on_assets"
                    isChecked={indicators.return_on_assets.isVisible}
               />
               <CheckboxItem
                    label="return on equity"
                    indicator="return_on_equity"
                    isChecked={indicators.return_on_equity.isVisible}
               />
          </IndicatorsCheckboxListLayout>
     );
}
