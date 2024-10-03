import React from "react";
import CheckboxItem from "@/components/ManageIndicators/CheckboxItem";
import IndicatorsCheckboxListLayout from "./IndicatorsCheckboxListLayout";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

export default function PrinceIndicatorsCheckboxList() {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );

     return (
          <IndicatorsCheckboxListLayout title="Price and Stock Performance">
               <CheckboxItem
                    label="current price"
                    indicator="current_price"
                    isChecked={indicators.current_price.isVisible}
               />
               <CheckboxItem
                    label="previous close"
                    indicator="previous_close"
                    isChecked={indicators.previous_close.isVisible}
               />
               <CheckboxItem
                    label="day high"
                    indicator="day_high"
                    isChecked={indicators.day_high.isVisible}
               />
               <CheckboxItem
                    label="day low"
                    indicator="day_low"
                    isChecked={indicators.day_low.isVisible}
               />
               <CheckboxItem
                    label="regular market change"
                    indicator="regular_market_change"
                    isChecked={indicators.regular_market_change.isVisible}
               />
               <CheckboxItem
                    label="regular market change percent"
                    indicator="regular_market_change_percent"
                    isChecked={
                         indicators.regular_market_change_percent.isVisible
                    }
               />
               <CheckboxItem
                    label="regular market day high"
                    indicator="regular_market_day_high"
                    isChecked={indicators.regular_market_day_high.isVisible}
               />
               <CheckboxItem
                    label="regular market day low"
                    indicator="regular_market_day_low"
                    isChecked={indicators.regular_market_day_low.isVisible}
               />
               <CheckboxItem
                    label="regular market open"
                    indicator="regular_market_open"
                    isChecked={indicators.regular_market_open.isVisible}
               />
               <CheckboxItem
                    label="regular market previous close"
                    indicator="regular_market_previous_close"
                    isChecked={
                         indicators.regular_market_previous_close.isVisible
                    }
               />
               <CheckboxItem
                    label="regular market price"
                    indicator="regular_market_price"
                    isChecked={indicators.regular_market_price.isVisible}
               />
               <CheckboxItem
                    label="regular market volume"
                    indicator="regular_market_volume"
                    isChecked={indicators.regular_market_volume.isVisible}
               />
               <CheckboxItem
                    label="fifty day average"
                    indicator="fifty_day_average"
                    isChecked={indicators.fifty_day_average.isVisible}
               />
               <CheckboxItem
                    label="two hundred day average"
                    indicator="two_hundred_day_average"
                    isChecked={indicators.two_hundred_day_average.isVisible}
               />
               <CheckboxItem
                    label="fifty two week high"
                    indicator="fifty_two_week_high"
                    isChecked={indicators.fifty_two_week_high.isVisible}
               />
               <CheckboxItem
                    label="fifty two week low"
                    indicator="fifty_two_week_low"
                    isChecked={indicators.fifty_two_week_low.isVisible}
               />
               <CheckboxItem
                    label="target high price"
                    indicator="target_high_price"
                    isChecked={indicators.target_high_price.isVisible}
               />
               <CheckboxItem
                    label="target low price"
                    indicator="target_low_price"
                    isChecked={indicators.target_low_price.isVisible}
               />
               <CheckboxItem
                    label="target mean price"
                    indicator="target_mean_price"
                    isChecked={indicators.target_mean_price.isVisible}
               />
               <CheckboxItem
                    label="target median price"
                    indicator="target_median_price"
                    isChecked={indicators.target_median_price.isVisible}
               />
          </IndicatorsCheckboxListLayout>
     );
}
