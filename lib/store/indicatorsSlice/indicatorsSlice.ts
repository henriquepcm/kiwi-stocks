import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IndicatorsState } from "./indicatorsSliceTypes";

const defaultIndicatorsState: IndicatorsState = {
     symbol: { isVisible: false, isActive: false },
     dividend_yield: { isVisible: false, isActive: false },
     eps_forward: { isVisible: false, isActive: false },
     eps_trailing_twelve_months: { isVisible: false, isActive: false },
     fifty_two_week_range_low: { isVisible: false, isActive: false },
     fifty_two_week_range_high: { isVisible: false, isActive: false },
     forward_pe: { isVisible: false, isActive: false },
     market_cap: { isVisible: false, isActive: false },
     price_to_book: { isVisible: false, isActive: false },
     regular_market_price: { isVisible: false, isActive: false },
     regular_market_volume: { isVisible: false, isActive: false },
     trailing_pe: { isVisible: false, isActive: false },
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
