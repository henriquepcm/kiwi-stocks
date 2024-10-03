import React from "react";
import CheckboxItem from "@/components/ManageIndicators/CheckboxItem";
import IndicatorsCheckboxListLayout from "./IndicatorsCheckboxListLayout";
import { RootState } from "@/lib/store/store";
import { useSelector } from "react-redux";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

export default function TradingIndicatorsCheckboxList() {
     const indicators: IndicatorsState = useSelector(
          (state: RootState) => state.indicators
     );

     return (
          <IndicatorsCheckboxListLayout title="Trading Information">
               <CheckboxItem
                    label="average daily volume 10 day"
                    indicator="average_daily_volume_10_day"
                    isChecked={indicators.average_daily_volume_10_day.isVisible}
               />
               <CheckboxItem
                    label="average daily volume 3 month"
                    indicator="average_daily_volume_3_month"
                    isChecked={
                         indicators.average_daily_volume_3_month.isVisible
                    }
               />
          </IndicatorsCheckboxListLayout>
     );
}
