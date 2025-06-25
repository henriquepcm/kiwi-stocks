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
               type: "numeric",
               value: row.dividend_yield,
               isVisible: indicators.dividend_yield.isVisible,
          },
          {
               type: "numeric",
               value: row.eps_forward,
               isVisible: indicators.eps_forward.isVisible,
          },
          {
               type: "numeric",
               value: row.eps_trailing_twelve_months,
               isVisible: indicators.eps_trailing_twelve_months.isVisible,
          },
          {
               type: "numeric",
               value: row.fifty_two_week_range_low,
               isVisible: indicators.fifty_two_week_range_low.isVisible,
          },
          {
               type: "numeric",
               value: row.fifty_two_week_range_high,
               isVisible: indicators.fifty_two_week_range_high.isVisible,
          },
          {
               type: "numeric",
               value: row.forward_pe,
               isVisible: indicators.forward_pe.isVisible,
          },
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
               value: row.regular_market_price,
               isVisible: indicators.regular_market_price.isVisible,
          },
          {
               type: "numeric",
               value: row.regular_market_volume,
               isVisible: indicators.regular_market_volume.isVisible,
          },
          {
               type: "numeric",
               value: row.trailing_pe,
               isVisible: indicators.trailing_pe.isVisible,
          },
     ];

     return [...generalIndicators];
};
