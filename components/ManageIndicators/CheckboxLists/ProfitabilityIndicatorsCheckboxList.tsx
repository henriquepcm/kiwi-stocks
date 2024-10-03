import React from "react";
import CheckboxItem from "@/components/ManageIndicators/CheckboxItem";
import IndicatorsCheckboxListLayout from "./IndicatorsCheckboxListLayout";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

export default function ProfitabilityIndicatorsCheckboxList() {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );

     return (
          <IndicatorsCheckboxListLayout title="Profitability and Margins">
               <CheckboxItem
                    label="gross margin"
                    indicator="gross_margin"
                    isChecked={indicators.gross_margin.isVisible}
               />
               <CheckboxItem
                    label="operating margin"
                    indicator="operating_margin"
                    isChecked={indicators.operating_margin.isVisible}
               />
               <CheckboxItem
                    label="ebitda margin"
                    indicator="ebitda_margin"
                    isChecked={indicators.ebitda_margin.isVisible}
               />
               <CheckboxItem
                    label="profit margin"
                    indicator="profit_margin"
                    isChecked={indicators.profit_margin.isVisible}
               />
               <CheckboxItem
                    label="ebitda"
                    indicator="ebitda"
                    isChecked={indicators.ebitda.isVisible}
               />
               <CheckboxItem
                    label="free cash flow"
                    indicator="free_cash_flow"
                    isChecked={indicators.free_cash_flow.isVisible}
               />
               <CheckboxItem
                    label="operating cash flow"
                    indicator="operating_cash_flow"
                    isChecked={indicators.operating_cash_flow.isVisible}
               />
          </IndicatorsCheckboxListLayout>
     );
}
