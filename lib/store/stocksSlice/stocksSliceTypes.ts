export interface StockDataProps {
     id?: string;
     created_at?: string;
     symbol: string;
     dividend_yield?: number;
     eps_forward?: number;
     eps_trailing_twelve_months?: number;
     fifty_two_week_range_low?: number;
     fifty_two_week_range_high?: number;
     forward_pe?: number;
     market_cap?: number;
     price_to_book?: number;
     regular_market_price?: number;
     regular_market_volume?: number;
     trailing_pe?: number;
}

export type StocksState = StockDataProps[];
