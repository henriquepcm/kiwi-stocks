import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";

interface IndicatorLabelsProps {
     label: string;
     indicatorKey: keyof IndicatorsState;
     isActive: boolean;
     isVisible: boolean;
}

export const uniteAllIndicatorLabels = (
     indicators: IndicatorsState
): IndicatorLabelsProps[] => {
     const generalIndicatorLabels: IndicatorLabelsProps[] = [
          {
               label: "symbol",
               indicatorKey: "symbol",
               isActive: indicators.symbol.isActive,
               isVisible: indicators.symbol.isVisible,
          },
          {
               label: "dividend yield",
               indicatorKey: "dividend_yield",
               isActive: indicators.dividend_yield.isActive,
               isVisible: indicators.dividend_yield.isVisible,
          },
          {
               label: "EPS forward",
               indicatorKey: "eps_forward",
               isActive: indicators.eps_forward.isActive,
               isVisible: indicators.eps_forward.isVisible,
          },
          {
               label: "EPS Trailing Twelve Months",
               indicatorKey: "eps_trailing_twelve_months",
               isActive: indicators.eps_trailing_twelve_months.isActive,
               isVisible: indicators.eps_trailing_twelve_months.isVisible,
          },
          {
               label: "Fifty Two Week Range Low",
               indicatorKey: "fifty_two_week_range_low",
               isActive: indicators.fifty_two_week_range_low.isActive,
               isVisible: indicators.fifty_two_week_range_low.isVisible,
          },
          {
               label: "Fifty Two Week Range High",
               indicatorKey: "fifty_two_week_range_high",
               isActive: indicators.fifty_two_week_range_high.isActive,
               isVisible: indicators.fifty_two_week_range_high.isVisible,
          },
          {
               label: "Forward PE",
               indicatorKey: "forward_pe",
               isActive: indicators.forward_pe.isActive,
               isVisible: indicators.forward_pe.isVisible,
          },
          {
               label: "Market Cap",
               indicatorKey: "market_cap",
               isActive: indicators.market_cap.isActive,
               isVisible: indicators.market_cap.isVisible,
          },
          {
               label: "Price to Book",
               indicatorKey: "price_to_book",
               isActive: indicators.price_to_book.isActive,
               isVisible: indicators.price_to_book.isVisible,
          },
          {
               label: "Regular Market Price",
               indicatorKey: "regular_market_price",
               isActive: indicators.regular_market_price.isActive,
               isVisible: indicators.regular_market_price.isVisible,
          },
          {
               label: "Regular Market Volume",
               indicatorKey: "regular_market_volume",
               isActive: indicators.regular_market_volume.isActive,
               isVisible: indicators.regular_market_volume.isVisible,
          },
          {
               label: "Trailing PE",
               indicatorKey: "trailing_pe",
               isActive: indicators.trailing_pe.isActive,
               isVisible: indicators.trailing_pe.isVisible,
          },
     ];

     return [...generalIndicatorLabels];
};
