import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";
import { StockDataProps } from "@/lib/store/stocksSlice/stocksSliceTypes";

interface StocksIndicatorsProps {
     type: string;
     value: string | number | undefined;
     isVisible: boolean;
}

export const uniteAllStocksData = (
     row: StockDataProps,
     indicators: IndicatorsState
) => {
     const generalIndicators: StocksIndicatorsProps[] = [
          {
               type: "descriptive",
               value: row.symbol,
               isVisible: indicators.symbol.isVisible,
          },
          {
               type: "descriptive",
               value: row.sector,
               isVisible: indicators.sector.isVisible,
          },
          {
               type: "descriptive",
               value: row.currency_symbol,
               isVisible: indicators.currency_symbol.isVisible,
          },
     ];

     const pricePerformanceIndicators: StocksIndicatorsProps[] = [
          {
               type: "numeric",
               value: row.current_price,
               isVisible: indicators.current_price.isVisible,
          },
          {
               type: "numeric",
               value: row.previous_close,
               isVisible: indicators.previous_close.isVisible,
          },
          {
               type: "numeric",
               value: row.day_high,
               isVisible: indicators.day_high.isVisible,
          },
          {
               type: "numeric",
               value: row.day_low,
               isVisible: indicators.day_low.isVisible,
          },
          {
               type: "numeric",
               value: row.regular_market_change,
               isVisible: indicators.regular_market_change.isVisible,
          },
          {
               type: "percentage",
               value: row.regular_market_change_percent,
               isVisible: indicators.regular_market_change_percent.isVisible,
          },
          {
               type: "numeric",
               value: row.regular_market_day_high,
               isVisible: indicators.regular_market_day_high.isVisible,
          },
          {
               type: "numeric",
               value: row.regular_market_day_low,
               isVisible: indicators.regular_market_day_low.isVisible,
          },
          {
               type: "numeric",
               value: row.regular_market_open,
               isVisible: indicators.regular_market_open.isVisible,
          },
          {
               type: "numeric",
               value: row.regular_market_previous_close,
               isVisible: indicators.regular_market_previous_close.isVisible,
          },
          {
               type: "numeric",
               value: row.regular_market_price,
               isVisible: indicators.regular_market_price.isVisible,
          },
          {
               type: "numeric",
               value: row.regular_market_price,
               isVisible: indicators.regular_market_price.isVisible,
          },
          {
               type: "numeric",
               value: row.fifty_day_average,
               isVisible: indicators.fifty_day_average.isVisible,
          },
          {
               type: "numeric",
               value: row.two_hundred_day_average,
               isVisible: indicators.two_hundred_day_average.isVisible,
          },
          {
               type: "numeric",
               value: row.fifty_two_week_high,
               isVisible: indicators.fifty_two_week_high.isVisible,
          },
          {
               type: "numeric",
               value: row.fifty_two_week_low,
               isVisible: indicators.fifty_two_week_low.isVisible,
          },
          {
               type: "numeric",
               value: row.target_high_price,
               isVisible: indicators.target_high_price.isVisible,
          },
          {
               type: "numeric",
               value: row.target_low_price,
               isVisible: indicators.target_low_price.isVisible,
          },
          {
               type: "numeric",
               value: row.target_mean_price,
               isVisible: indicators.target_mean_price.isVisible,
          },
          {
               type: "numeric",
               value: row.target_median_price,
               isVisible: indicators.target_median_price.isVisible,
          },
     ];

     const tradingIndicators: StocksIndicatorsProps[] = [
          {
               type: "numeric",
               value: row.average_daily_volume_10_day,
               isVisible: indicators.average_daily_volume_10_day.isVisible,
          },
          {
               type: "numeric",
               value: row.average_daily_volume_3_month,
               isVisible: indicators.average_daily_volume_3_month.isVisible,
          },
     ];

     const valuationMetrics: StocksIndicatorsProps[] = [
          {
               type: "numeric",
               value: row.market_cap,
               isVisible: indicators.market_cap.isVisible,
          },
          {
               type: "numeric",
               value: row.price_to_book,
               isVisible: indicators.price_to_book.isVisible,
          },
          {
               type: "numeric",
               value: row.price_to_sales_trailing_12_months,
               isVisible:
                    indicators.price_to_sales_trailing_12_months.isVisible,
          },
          {
               type: "numeric",
               value: row.forward_pe,
               isVisible: indicators.forward_pe.isVisible,
          },
          {
               type: "numeric",
               value: row.trailing_pe,
               isVisible: indicators.trailing_pe.isVisible,
          },
     ];

     const profitabilityMargins: StocksIndicatorsProps[] = [
          {
               type: "percentage",
               value: row.gross_margin,
               isVisible: indicators.gross_margin.isVisible,
          },
          {
               type: "percentage",
               value: row.operating_margin,
               isVisible: indicators.operating_margin.isVisible,
          },
          {
               type: "percentage",
               value: row.ebitda_margin,
               isVisible: indicators.ebitda_margin.isVisible,
          },
          {
               type: "percentage",
               value: row.profit_margin,
               isVisible: indicators.profit_margin.isVisible,
          },
          {
               type: "numeric",
               value: row.ebitda,
               isVisible: indicators.ebitda.isVisible,
          },
          {
               type: "numeric",
               value: row.free_cash_flow,
               isVisible: indicators.free_cash_flow.isVisible,
          },
          {
               type: "numeric",
               value: row.operating_cash_flow,
               isVisible: indicators.operating_cash_flow.isVisible,
          },
     ];

     const dividendsReturns: StocksIndicatorsProps[] = [
          {
               type: "numeric",
               value: row.dividend_rate,
               isVisible: indicators.dividend_rate.isVisible,
          },
          {
               type: "percentage",
               value: row.dividend_yield,
               isVisible: indicators.dividend_yield.isVisible,
          },
          {
               type: "numeric",
               value: row.trailing_annual_dividend_rate,
               isVisible: indicators.trailing_annual_dividend_rate.isVisible,
          },
          {
               type: "percentage",
               value: row.trailing_annual_dividend_yield,
               isVisible: indicators.trailing_annual_dividend_yield.isVisible,
          },
          {
               type: "numeric",
               value: row.five_year_avg_dividend_yield,
               isVisible: indicators.five_year_avg_dividend_yield.isVisible,
          },
          {
               type: "percentage",
               value: row.payout_ratio,
               isVisible: indicators.payout_ratio.isVisible,
          },
     ];

     const growthMetrics: StocksIndicatorsProps[] = [
          {
               type: "percentage",
               value: row.earnings_growth,
               isVisible: indicators.earnings_growth.isVisible,
          },
          {
               type: "percentage",
               value: row.revenue_growth,
               isVisible: indicators.revenue_growth.isVisible,
          },
          {
               type: "numeric",
               value: row.revenue_per_share,
               isVisible: indicators.revenue_per_share.isVisible,
          },
     ];

     const liquidityRatios: StocksIndicatorsProps[] = [
          {
               type: "numeric",
               value: row.current_ratio,
               isVisible: indicators.current_ratio.isVisible,
          },
          {
               type: "numeric",
               value: row.quick_ratio,
               isVisible: indicators.quick_ratio.isVisible,
          },
          {
               type: "numeric",
               value: row.debt_to_equity,
               isVisible: indicators.debt_to_equity.isVisible,
          },
     ];

     const returns: StocksIndicatorsProps[] = [
          {
               type: "percentage",
               value: row.return_on_assets,
               isVisible: indicators.return_on_assets.isVisible,
          },
          {
               type: "percentage",
               value: row.return_on_equity,
               isVisible: indicators.return_on_equity.isVisible,
          },
     ];

     const volatility: StocksIndicatorsProps[] = [
          {
               type: "numeric",
               value: row.beta,
               isVisible: indicators.beta.isVisible,
          },
     ];

     const financialTotals: StocksIndicatorsProps[] = [
          {
               type: "numeric",
               value: row.total_cash,
               isVisible: indicators.total_cash.isVisible,
          },
          {
               type: "numeric",
               value: row.total_cash_per_share,
               isVisible: indicators.total_cash_per_share.isVisible,
          },
          {
               type: "numeric",
               value: row.total_debt,
               isVisible: indicators.total_debt.isVisible,
          },
          {
               type: "numeric",
               value: row.total_revenue,
               isVisible: indicators.total_revenue.isVisible,
          },
     ];

     return [
          ...generalIndicators,
          ...pricePerformanceIndicators,
          ...tradingIndicators,
          ...valuationMetrics,
          ...profitabilityMargins,
          ...dividendsReturns,
          ...growthMetrics,
          ...liquidityRatios,
          ...returns,
          ...volatility,
          ...financialTotals,
     ];
};
