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
                    label="symbol"
                    indicator="symbol"
                    isChecked={indicators.symbol.isVisible}
               />
               <CheckboxItem
                    label="dividend yield"
                    indicator="dividend_yield"
                    isChecked={indicators.dividend_yield.isVisible}
               />
               <CheckboxItem
                    label="EPS forward"
                    indicator="eps_forward"
                    isChecked={indicators.eps_forward.isVisible}
               />
               <CheckboxItem
                    label="EPS Trailing Twelve Months"
                    indicator="eps_trailing_twelve_months"
                    isChecked={indicators.eps_trailing_twelve_months.isVisible}
               />
               <CheckboxItem
                    label="Fifty Two Week Range Low"
                    indicator="fifty_two_week_range_low"
                    isChecked={indicators.fifty_two_week_range_low.isVisible}
               />
               <CheckboxItem
                    label="Fifty Two Week Range High"
                    indicator="fifty_two_week_range_high"
                    isChecked={indicators.fifty_two_week_range_high.isVisible}
               />
               <CheckboxItem
                    label="Forward PE"
                    indicator="forward_pe"
                    isChecked={indicators.forward_pe.isVisible}
               />
               <CheckboxItem
                    label="Market Cap"
                    indicator="market_cap"
                    isChecked={indicators.market_cap.isVisible}
               />
               <CheckboxItem
                    label="Price to Book"
                    indicator="price_to_book"
                    isChecked={indicators.price_to_book.isVisible}
               />
               <CheckboxItem
                    label="Regular Market Price"
                    indicator="regular_market_price"
                    isChecked={indicators.regular_market_price.isVisible}
               />
               <CheckboxItem
                    label="Regular Market Volume"
                    indicator="regular_market_volume"
                    isChecked={indicators.regular_market_volume.isVisible}
               />
               <CheckboxItem
                    label="Trailing PE"
                    indicator="trailing_pe"
                    isChecked={indicators.trailing_pe.isVisible}
               />
          </IndicatorsCheckboxListLayout>
     );
}
