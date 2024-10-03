import React from "react";
import CheckboxItem from "@/components/ManageIndicators/CheckboxItem";
import IndicatorsCheckboxListLayout from "./IndicatorsCheckboxListLayout";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

export default function ValuationIndicatorsCheckboxList() {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );

     return (
          <IndicatorsCheckboxListLayout title="Valuation Metrics">
               <CheckboxItem
                    label="market cap"
                    indicator="market_cap"
                    isChecked={indicators.market_cap.isVisible}
               />
               <CheckboxItem
                    label="price to book"
                    indicator="price_to_book"
                    isChecked={indicators.price_to_book.isVisible}
               />
               <CheckboxItem
                    label="price to sales trailing 12 months"
                    indicator="price_to_sales_trailing_12_months"
                    isChecked={
                         indicators.price_to_sales_trailing_12_months.isVisible
                    }
               />
               <CheckboxItem
                    label="forward pe"
                    indicator="forward_pe"
                    isChecked={indicators.forward_pe.isVisible}
               />
               <CheckboxItem
                    label="trailing pe"
                    indicator="trailing_pe"
                    isChecked={indicators.trailing_pe.isVisible}
               />
          </IndicatorsCheckboxListLayout>
     );
}
