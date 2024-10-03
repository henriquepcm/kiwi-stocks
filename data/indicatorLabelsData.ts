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
               label: "sector",
               indicatorKey: "sector",
               isActive: indicators.sector.isActive,
               isVisible: indicators.sector.isVisible,
          },
          {
               label: "currency symbol",
               indicatorKey: "currency_symbol",
               isActive: indicators.currency_symbol.isActive,
               isVisible: indicators.currency_symbol.isVisible,
          },
     ];

     const priceIndicatorLabels: IndicatorLabelsProps[] = [
          {
               label: "current price",
               indicatorKey: "current_price",
               isActive: indicators.current_price.isActive,
               isVisible: indicators.current_price.isVisible,
          },
          {
               label: "previous close",
               indicatorKey: "previous_close",
               isActive: indicators.previous_close.isActive,
               isVisible: indicators.previous_close.isVisible,
          },
          {
               label: "day high",
               indicatorKey: "day_high",
               isActive: indicators.day_high.isActive,
               isVisible: indicators.day_high.isVisible,
          },
          {
               label: "day low",
               indicatorKey: "day_low",
               isActive: indicators.day_low.isActive,
               isVisible: indicators.day_low.isVisible,
          },
          {
               label: "regular market change",
               indicatorKey: "regular_market_change",
               isActive: indicators.regular_market_change.isActive,
               isVisible: indicators.regular_market_change.isVisible,
          },
          {
               label: "regular market change percent",
               indicatorKey: "regular_market_change_percent",
               isActive: indicators.regular_market_change_percent.isActive,
               isVisible: indicators.regular_market_change_percent.isVisible,
          },
          {
               label: "regular market day high",
               indicatorKey: "regular_market_day_high",
               isActive: indicators.regular_market_day_high.isActive,
               isVisible: indicators.regular_market_day_high.isVisible,
          },
          {
               label: "regular market day low",
               indicatorKey: "regular_market_day_low",
               isActive: indicators.regular_market_day_low.isActive,
               isVisible: indicators.regular_market_day_low.isVisible,
          },
          {
               label: "regular market open",
               indicatorKey: "regular_market_open",
               isActive: indicators.regular_market_open.isActive,
               isVisible: indicators.regular_market_open.isVisible,
          },
          {
               label: "regular market previous close",
               indicatorKey: "regular_market_previous_close",
               isActive: indicators.regular_market_previous_close.isActive,
               isVisible: indicators.regular_market_previous_close.isVisible,
          },
          {
               label: "regular market price",
               indicatorKey: "regular_market_price",
               isActive: indicators.regular_market_price.isActive,
               isVisible: indicators.regular_market_price.isVisible,
          },
          {
               label: "regular market volume",
               indicatorKey: "regular_market_volume",
               isActive: indicators.regular_market_volume.isActive,
               isVisible: indicators.regular_market_volume.isVisible,
          },
          {
               label: "50 day average",
               indicatorKey: "fifty_day_average",
               isActive: indicators.fifty_day_average.isActive,
               isVisible: indicators.fifty_day_average.isVisible,
          },
          {
               label: "200 day average",
               indicatorKey: "two_hundred_day_average",
               isActive: indicators.two_hundred_day_average.isActive,
               isVisible: indicators.two_hundred_day_average.isVisible,
          },
          {
               label: "52 week high",
               indicatorKey: "fifty_two_week_high",
               isActive: indicators.fifty_two_week_high.isActive,
               isVisible: indicators.fifty_two_week_high.isVisible,
          },
          {
               label: "52 week low",
               indicatorKey: "fifty_two_week_low",
               isActive: indicators.fifty_two_week_low.isActive,
               isVisible: indicators.fifty_two_week_low.isVisible,
          },
          {
               label: "target high price",
               indicatorKey: "target_high_price",
               isActive: indicators.target_high_price.isActive,
               isVisible: indicators.target_high_price.isVisible,
          },
          {
               label: "target low price",
               indicatorKey: "target_low_price",
               isActive: indicators.target_low_price.isActive,
               isVisible: indicators.target_low_price.isVisible,
          },
          {
               label: "target mean price",
               indicatorKey: "target_mean_price",
               isActive: indicators.target_mean_price.isActive,
               isVisible: indicators.target_mean_price.isVisible,
          },
          {
               label: "target median price",
               indicatorKey: "target_median_price",
               isActive: indicators.target_median_price.isActive,
               isVisible: indicators.target_median_price.isVisible,
          },
     ];

     const tradingIndicatorLabels: IndicatorLabelsProps[] = [
          {
               label: "average daily volume, 10d",
               indicatorKey: "average_daily_volume_10_day",
               isActive: indicators.average_daily_volume_10_day.isActive,
               isVisible: indicators.average_daily_volume_10_day.isVisible,
          },
          {
               label: "average daily volume, 3m",
               indicatorKey: "average_daily_volume_3_month",
               isActive: indicators.average_daily_volume_3_month.isActive,
               isVisible: indicators.average_daily_volume_3_month.isVisible,
          },
     ];

     const valuationIndicatorLabels: IndicatorLabelsProps[] = [
          {
               label: "market cap",
               indicatorKey: "market_cap",
               isActive: indicators.market_cap.isActive,
               isVisible: indicators.market_cap.isVisible,
          },
          {
               label: "price to book",
               indicatorKey: "price_to_book",
               isActive: indicators.price_to_book.isActive,
               isVisible: indicators.price_to_book.isVisible,
          },
          {
               label: "price to sales trailing 12 months",
               indicatorKey: "price_to_sales_trailing_12_months",
               isActive: indicators.price_to_sales_trailing_12_months.isActive,
               isVisible:
                    indicators.price_to_sales_trailing_12_months.isVisible,
          },
          {
               label: "forward pe",
               indicatorKey: "forward_pe",
               isActive: indicators.forward_pe.isActive,
               isVisible: indicators.forward_pe.isVisible,
          },
          {
               label: "trailing pe",
               indicatorKey: "trailing_pe",
               isActive: indicators.trailing_pe.isActive,
               isVisible: indicators.trailing_pe.isVisible,
          },
     ];

     const profitabilityIndicatorLabels: IndicatorLabelsProps[] = [
          {
               label: "gross margin",
               indicatorKey: "gross_margin",
               isActive: indicators.gross_margin.isActive,
               isVisible: indicators.gross_margin.isVisible,
          },
          {
               label: "operating margin",
               indicatorKey: "operating_margin",
               isActive: indicators.operating_margin.isActive,
               isVisible: indicators.operating_margin.isVisible,
          },
          {
               label: "ebitda margin",
               indicatorKey: "ebitda_margin",
               isActive: indicators.ebitda_margin.isActive,
               isVisible: indicators.ebitda_margin.isVisible,
          },
          {
               label: "profit margin",
               indicatorKey: "profit_margin",
               isActive: indicators.profit_margin.isActive,
               isVisible: indicators.profit_margin.isVisible,
          },
          {
               label: "ebitda",
               indicatorKey: "ebitda",
               isActive: indicators.ebitda.isActive,
               isVisible: indicators.ebitda.isVisible,
          },
          {
               label: "free cash flow",
               indicatorKey: "free_cash_flow",
               isActive: indicators.free_cash_flow.isActive,
               isVisible: indicators.free_cash_flow.isVisible,
          },
          {
               label: "operating cash flow",
               indicatorKey: "operating_cash_flow",
               isActive: indicators.operating_cash_flow.isActive,
               isVisible: indicators.operating_cash_flow.isVisible,
          },
     ];

     const dividendsIndicatorLabels: IndicatorLabelsProps[] = [
          {
               label: "dividend rate",
               indicatorKey: "dividend_rate",
               isActive: indicators.dividend_rate.isActive,
               isVisible: indicators.dividend_rate.isVisible,
          },
          {
               label: "dividend yield",
               indicatorKey: "dividend_yield",
               isActive: indicators.dividend_yield.isActive,
               isVisible: indicators.dividend_yield.isVisible,
          },
          {
               label: "trailing annual dividend rate",
               indicatorKey: "trailing_annual_dividend_rate",
               isActive: indicators.trailing_annual_dividend_rate.isActive,
               isVisible: indicators.trailing_annual_dividend_rate.isVisible,
          },
          {
               label: "trailing annual dividend yield",
               indicatorKey: "trailing_annual_dividend_yield",
               isActive: indicators.trailing_annual_dividend_yield.isActive,
               isVisible: indicators.trailing_annual_dividend_yield.isVisible,
          },
          {
               label: "5 year avg dividend yield",
               indicatorKey: "five_year_avg_dividend_yield",
               isActive: indicators.five_year_avg_dividend_yield.isActive,
               isVisible: indicators.five_year_avg_dividend_yield.isVisible,
          },
          {
               label: "payout ratio",
               indicatorKey: "payout_ratio",
               isActive: indicators.payout_ratio.isActive,
               isVisible: indicators.payout_ratio.isVisible,
          },
     ];

     const growthIndicatorLabels: IndicatorLabelsProps[] = [
          {
               label: "earnings growth",
               indicatorKey: "earnings_growth",
               isActive: indicators.earnings_growth.isActive,
               isVisible: indicators.earnings_growth.isVisible,
          },
          {
               label: "revenue growth",
               indicatorKey: "revenue_growth",
               isActive: indicators.revenue_growth.isActive,
               isVisible: indicators.revenue_growth.isVisible,
          },
          {
               label: "revenue per share",
               indicatorKey: "revenue_per_share",
               isActive: indicators.revenue_per_share.isActive,
               isVisible: indicators.revenue_per_share.isVisible,
          },
     ];

     const liquidityIndicatorLabels: IndicatorLabelsProps[] = [
          {
               label: "current ratio",
               indicatorKey: "current_ratio",
               isActive: indicators.current_ratio.isActive,
               isVisible: indicators.current_ratio.isVisible,
          },
          {
               label: "quick ratio",
               indicatorKey: "quick_ratio",
               isActive: indicators.quick_ratio.isActive,
               isVisible: indicators.quick_ratio.isVisible,
          },
          {
               label: "debt to equity",
               indicatorKey: "debt_to_equity",
               isActive: indicators.debt_to_equity.isActive,
               isVisible: indicators.debt_to_equity.isVisible,
          },
     ];

     const returnsIndicatorLabels: IndicatorLabelsProps[] = [
          {
               label: "return on assets",
               indicatorKey: "return_on_assets",
               isActive: indicators.return_on_assets.isActive,
               isVisible: indicators.return_on_assets.isVisible,
          },
          {
               label: "return on equity",
               indicatorKey: "return_on_equity",
               isActive: indicators.return_on_equity.isActive,
               isVisible: indicators.return_on_equity.isVisible,
          },
     ];

     const volatilityIndicatorLabels: IndicatorLabelsProps[] = [
          {
               label: "beta",
               indicatorKey: "beta",
               isActive: indicators.beta.isActive,
               isVisible: indicators.beta.isVisible,
          },
     ];

     const financialIndicatorLabels: IndicatorLabelsProps[] = [
          {
               label: "total cash",
               indicatorKey: "total_cash",
               isActive: indicators.total_cash.isActive,
               isVisible: indicators.total_cash.isVisible,
          },
          {
               label: "total cash per share",
               indicatorKey: "total_cash_per_share",
               isActive: indicators.total_cash_per_share.isActive,
               isVisible: indicators.total_cash_per_share.isVisible,
          },
          {
               label: "total debt",
               indicatorKey: "total_debt",
               isActive: indicators.total_debt.isActive,
               isVisible: indicators.total_debt.isVisible,
          },
          {
               label: "total revenue",
               indicatorKey: "total_revenue",
               isActive: indicators.total_revenue.isActive,
               isVisible: indicators.total_revenue.isVisible,
          },
     ];

     return [
          ...generalIndicatorLabels,
          ...priceIndicatorLabels,
          ...tradingIndicatorLabels,
          ...valuationIndicatorLabels,
          ...profitabilityIndicatorLabels,
          ...dividendsIndicatorLabels,
          ...growthIndicatorLabels,
          ...liquidityIndicatorLabels,
          ...returnsIndicatorLabels,
          ...volatilityIndicatorLabels,
          ...financialIndicatorLabels,
     ];
};
