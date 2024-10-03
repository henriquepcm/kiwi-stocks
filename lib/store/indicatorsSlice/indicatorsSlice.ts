import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IndicatorsState } from "./indicatorsSliceTypes";

const defaultIndicatorsState: IndicatorsState = {
     average_daily_volume_10_day: { isVisible: false, isActive: false },
     average_daily_volume_3_month: { isVisible: false, isActive: false },
     beta: { isVisible: false, isActive: false },
     currency_symbol: { isVisible: false, isActive: false },
     current_price: { isVisible: false, isActive: false },
     current_ratio: { isVisible: false, isActive: false },
     day_high: { isVisible: false, isActive: false },
     day_low: { isVisible: false, isActive: false },
     debt_to_equity: { isVisible: false, isActive: false },
     dividend_rate: { isVisible: false, isActive: false },
     dividend_yield: { isVisible: false, isActive: false },
     earnings_growth: { isVisible: false, isActive: false },
     ebitda: { isVisible: false, isActive: false },
     ebitda_margin: { isVisible: false, isActive: false },
     fifty_day_average: { isVisible: false, isActive: false },
     fifty_two_week_high: { isVisible: false, isActive: false },
     fifty_two_week_low: { isVisible: false, isActive: false },
     five_year_avg_dividend_yield: { isVisible: false, isActive: false },
     forward_pe: { isVisible: false, isActive: false },
     free_cash_flow: { isVisible: false, isActive: false },
     gross_margin: { isVisible: false, isActive: false },
     market_cap: { isVisible: false, isActive: false },
     operating_cash_flow: { isVisible: false, isActive: false },
     operating_margin: { isVisible: false, isActive: false },
     payout_ratio: { isVisible: false, isActive: false },
     previous_close: { isVisible: false, isActive: false },
     price_to_book: { isVisible: false, isActive: false },
     price_to_sales_trailing_12_months: {
          isVisible: false,
          isActive: false,
     },
     profit_margin: { isVisible: false, isActive: false },
     quick_ratio: { isVisible: false, isActive: false },
     regular_market_change: { isVisible: false, isActive: false },
     regular_market_change_percent: { isVisible: false, isActive: false },
     regular_market_day_high: { isVisible: false, isActive: false },
     regular_market_day_low: { isVisible: false, isActive: false },
     regular_market_open: { isVisible: false, isActive: false },
     regular_market_previous_close: { isVisible: false, isActive: false },
     regular_market_price: { isVisible: false, isActive: false },
     regular_market_volume: { isVisible: false, isActive: false },
     return_on_assets: { isVisible: false, isActive: false },
     return_on_equity: { isVisible: false, isActive: false },
     revenue_growth: { isVisible: false, isActive: false },
     revenue_per_share: { isVisible: false, isActive: false },
     sector: { isVisible: false, isActive: false },
     symbol: { isVisible: false, isActive: false },
     target_high_price: { isVisible: false, isActive: false },
     target_low_price: { isVisible: false, isActive: false },
     target_mean_price: { isVisible: false, isActive: false },
     target_median_price: { isVisible: false, isActive: false },
     total_cash: { isVisible: false, isActive: false },
     total_cash_per_share: { isVisible: false, isActive: false },
     total_debt: { isVisible: false, isActive: false },
     total_revenue: { isVisible: false, isActive: false },
     trailing_annual_dividend_rate: { isVisible: false, isActive: false },
     trailing_annual_dividend_yield: { isVisible: false, isActive: false },
     trailing_pe: { isVisible: false, isActive: false },
     two_hundred_day_average: { isVisible: false, isActive: false },
};

const initialState = defaultIndicatorsState;

const indicatorsSlice = createSlice({
     name: "indicators",
     initialState,
     reducers: {
          loadIndicators: (state, action: PayloadAction<IndicatorsState>) => {
               return action.payload;
          },
          setIndicatorVisibility: (
               state,
               action: PayloadAction<{ indicator: keyof IndicatorsState }>
          ) => {
               const { indicator } = action.payload;

               state[indicator].isVisible = !state[indicator].isVisible;
          },
          setIndicatorActiveState: (
               state,
               action: PayloadAction<{ indicator: keyof IndicatorsState }>
          ) => {
               const { indicator } = action.payload;

               Object.values(state).forEach((ind) => {
                    ind.isActive = false;
               });
               state[indicator].isActive = true;
          },
     },
});

export const {
     setIndicatorVisibility,
     setIndicatorActiveState,
     loadIndicators,
} = indicatorsSlice.actions;
export const indicatorsReducer = indicatorsSlice.reducer;
