export interface IndicatorProps {
     isVisible: boolean;
     isActive: boolean;
}

export interface IndicatorsState {
     symbol: IndicatorProps;
     dividend_yield: IndicatorProps;
     eps_forward: IndicatorProps;
     eps_trailing_twelve_months: IndicatorProps;
     fifty_two_week_range_low: IndicatorProps;
     fifty_two_week_range_high: IndicatorProps;
     forward_pe: IndicatorProps;
     market_cap: IndicatorProps;
     price_to_book: IndicatorProps;
     regular_market_price: IndicatorProps;
     regular_market_volume: IndicatorProps;
     trailing_pe: IndicatorProps;
}
