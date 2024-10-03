import React from "react";
import CheckboxItem from "@/components/ManageIndicators/CheckboxItem";
import IndicatorsCheckboxListLayout from "./IndicatorsCheckboxListLayout";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

export default function FinancialIndicatorsCheckboxList() {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );

     return (
          <IndicatorsCheckboxListLayout title="Financial Totals">
               <CheckboxItem
                    label="total cash"
                    indicator="total_cash"
                    isChecked={indicators.total_cash.isVisible}
               />
               <CheckboxItem
                    label="total cash per share"
                    indicator="total_cash_per_share"
                    isChecked={indicators.total_cash_per_share.isVisible}
               />
               <CheckboxItem
                    label="total debt"
                    indicator="total_debt"
                    isChecked={indicators.total_debt.isVisible}
               />
               <CheckboxItem
                    label="total revenue"
                    indicator="total_revenue"
                    isChecked={indicators.total_revenue.isVisible}
               />
          </IndicatorsCheckboxListLayout>
     );
}
