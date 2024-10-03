import React from "react";
import CheckboxItem from "@/components/ManageIndicators/CheckboxItem";
import IndicatorsCheckboxListLayout from "./IndicatorsCheckboxListLayout";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

export default function DividendsIndicatorsCheckboxList() {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );

     return (
          <IndicatorsCheckboxListLayout title="Dividends and Returns">
               <CheckboxItem
                    label="dividend rate"
                    indicator="dividend_rate"
                    isChecked={indicators.dividend_rate.isVisible}
               />
               <CheckboxItem
                    label="dividend yield"
                    indicator="dividend_yield"
                    isChecked={indicators.dividend_yield.isVisible}
               />
               <CheckboxItem
                    label="trailing annual dividend rate"
                    indicator="trailing_annual_dividend_rate"
                    isChecked={
                         indicators.trailing_annual_dividend_rate.isVisible
                    }
               />
               <CheckboxItem
                    label="trailing annual dividend yield"
                    indicator="trailing_annual_dividend_yield"
                    isChecked={
                         indicators.trailing_annual_dividend_yield.isVisible
                    }
               />
               <CheckboxItem
                    label="five year avg dividend yield"
                    indicator="five_year_avg_dividend_yield"
                    isChecked={
                         indicators.five_year_avg_dividend_yield.isVisible
                    }
               />
               <CheckboxItem
                    label="payout ratio"
                    indicator="payout_ratio"
                    isChecked={indicators.payout_ratio.isVisible}
               />
               <CheckboxItem
                    label="earnings growth"
                    indicator="earnings_growth"
                    isChecked={indicators.earnings_growth.isVisible}
               />
               <CheckboxItem
                    label="revenue growth"
                    indicator="revenue_growth"
                    isChecked={indicators.revenue_growth.isVisible}
               />
               <CheckboxItem
                    label="revenue per share"
                    indicator="revenue_per_share"
                    isChecked={indicators.revenue_per_share.isVisible}
               />
          </IndicatorsCheckboxListLayout>
     );
}
