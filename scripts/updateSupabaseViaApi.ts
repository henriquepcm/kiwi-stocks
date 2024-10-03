import { createClient } from "@supabase/supabase-js";
import { StocksApiResponse } from "./stocksApiResponseSchema";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const KEY = process.env.RAPIDAPI_KEY;

if (!supabaseUrl || !supabaseKey || !KEY) {
     throw new Error("Missing environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);
const API_URL =
     "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary";
const options = {
     method: "GET",
     headers: {
          "x-rapidapi-key": KEY,
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
     },
};

// IDIV: 48 symbols
const symbols: string[] = [
     "ABCB4.SA",
     "AURE3.SA",
     "BRSR6.SA",
     "BBSE3.SA",
     "BBDC3.SA",
     "BBDC4.SA",
     "BRAP4.SA",
     "BBAS3.SA",
     "AGRO3.SA",
     "CXSE3.SA",
     "CMIG3.SA",
     "CMIG4.SA",
     "CSMG3.SA",
     "CPFE3.SA",
     "CMIN3.SA",
     "CURY3.SA",
     "DIRR3.SA",
     "EGIE3.SA",
     "FESA4.SA",
     "FLRY3.SA",
     "GGBR4.SA",
     "GOAU4.SA",
     "RANI3.SA",
     "ITSA4.SA",
     "JBSS3.SA",
     "JHSF3.SA",
     "KEPL3.SA",
     "KLBN11.SA",
     "LAVV3.SA",
     "POMO4.SA",
     "LEVE3.SA",
     "MTRE3.SA",
     "PETR3.SA",
     "PETR4.SA",
     "SAPR4.SA",
     "SANB11.SA",
     "STBP3.SA",
     "CSNA3.SA",
     "TAEE11.SA",
     "TASA4.SA",
     "TGMA3.SA",
     "VIVT3.SA",
     "TIMS3.SA",
     "TRPL4.SA",
     "UNIP6.SA",
     "USIM5.SA",
     "VALE3.SA",
     "WIZC3.SA",
];

async function UpdateSupabaseViaApi(): Promise<void> {
     const results: StocksApiResponse[] = [];

     // The API allows 5 requests per second only
     for (let i = 0; i < symbols.length; i += 5) {
          const batch = symbols.slice(i, i + 5).map(async (symbol) => {
               const url = `${API_URL}?symbol=${symbol}`;
               try {
                    const response = await fetch(url, options);
                    return response.ok ? response.json() : null;
               } catch (error) {
                    console.log(
                         `Error fetching data for symbol: ${symbol}`,
                         error
                    );
                    return null;
               }
          });

          const batchResults = await Promise.allSettled(batch);
          batchResults.forEach((result) => {
               if (result.status === "fulfilled" && result.value) {
                    results.push(result.value);
               }
          });

          if (i + 5 < symbols.length) {
               await new Promise((resolve) => setTimeout(resolve, 1000));
          }
     }

     //Delete all info from the table before adding current data
     const { error: deleteError } = await supabase
          .from("stocks_data")
          .delete()
          .neq("symbol", "");

     if (deleteError) {
          console.error("Error deleting data from Supabase:", deleteError);
     }

     // Insert the results into the Supabase table
     const { error } = await supabase.from("stocks_data").upsert(
          results.map(
               (result) => ({
                    // General
                    symbol: result?.symbol,
                    sector: result?.summaryProfile?.sector,
                    currency_symbol: result?.price?.currencySymbol,

                    //Price and Stock Performance
                    current_price: result?.financialData?.currentPrice?.raw,
                    previous_close: result?.summaryDetail?.previousClose?.raw,
                    day_high: result?.summaryDetail?.dayHigh.raw,
                    day_low: result?.summaryDetail?.dayLow?.raw,
                    regular_market_change:
                         result?.price?.regularMarketChange?.raw,
                    regular_market_change_percent:
                         result?.price?.regularMarketChangePercent?.raw,
                    regular_market_day_high:
                         result?.summaryDetail?.regularMarketDayHigh?.raw,
                    regular_market_day_low:
                         result?.summaryDetail?.regularMarketDayLow?.raw,
                    regular_market_open: result?.price?.regularMarketOpen?.raw,
                    regular_market_previous_close:
                         result?.price?.regularMarketPreviousClose?.raw,
                    regular_market_price:
                         result?.price?.regularMarketPrice?.raw,
                    regular_market_volume:
                         result?.price?.regularMarketVolume?.raw,
                    fifty_day_average:
                         result?.summaryDetail?.fiftyDayAverage?.raw,
                    two_hundred_day_average:
                         result?.summaryDetail?.twoHundredDayAverage?.raw,
                    fifty_two_week_high:
                         result?.summaryDetail?.fiftyTwoWeekHigh?.raw,
                    fifty_two_week_low:
                         result?.summaryDetail?.fiftyTwoWeekLow?.raw,
                    target_high_price:
                         result?.financialData?.targetHighPrice?.raw,
                    target_low_price:
                         result?.financialData?.targetLowPrice?.raw,
                    target_mean_price:
                         result?.financialData?.targetMeanPrice?.raw,
                    target_median_price:
                         result?.financialData?.targetMedianPrice?.raw,

                    //Trading Information
                    average_daily_volume_10_day:
                         result?.price?.averageDailyVolume10Day?.raw,
                    average_daily_volume_3_month:
                         result?.price?.averageDailyVolume3Month?.raw,

                    //Valuation Metrics
                    market_cap: result?.summaryDetail?.marketCap?.raw,
                    price_to_book:
                         result?.defaultKeyStatistics?.priceToBook?.raw,
                    price_to_sales_trailing_12_months:
                         result?.summaryDetail?.priceToSalesTrailing12Months
                              ?.raw,
                    forward_pe: result?.summaryDetail?.forwardPE?.raw,
                    trailing_pe: result?.summaryDetail?.trailingPE?.raw,

                    //Profitability and Margins
                    gross_margin: result?.financialData?.grossMargins?.raw,
                    operating_margin:
                         result?.financialData?.operatingMargins?.raw,
                    ebitda_margin: result?.financialData?.ebitdaMargins?.raw,
                    profit_margin: result?.financialData?.profitMargins?.raw,
                    ebitda: result?.financialData?.ebitda?.raw,
                    free_cash_flow: result?.financialData?.freeCashflow?.raw,
                    operating_cash_flow:
                         result?.financialData?.operatingCashflow?.raw,

                    // Dividends and Returns
                    dividend_rate: result?.summaryDetail?.dividendRate?.raw,
                    dividend_yield: result?.summaryDetail?.dividendYield?.raw,
                    trailing_annual_dividend_rate:
                         result?.summaryDetail?.trailingAnnualDividendRate?.raw,
                    trailing_annual_dividend_yield:
                         result?.summaryDetail?.trailingAnnualDividendYield
                              ?.raw,
                    five_year_avg_dividend_yield:
                         result?.summaryDetail?.fiveYearAvgDividendYield?.raw,
                    payout_ratio: result?.summaryDetail?.payoutRatio?.raw,

                    // Growth Metrics
                    earnings_growth: result?.financialData?.earningsGrowth?.raw,
                    revenue_growth: result?.financialData?.revenueGrowth?.raw,
                    revenue_per_share:
                         result?.financialData?.revenuePerShare?.raw,

                    // Liquidity and Solvency Ratios
                    current_ratio: result?.financialData?.currentRatio?.raw,
                    quick_ratio: result?.financialData?.quickRatio?.raw,
                    debt_to_equity: result?.financialData?.debtToEquity?.raw,

                    // Returns
                    return_on_assets:
                         result?.financialData?.returnOnAssets?.raw,
                    return_on_equity:
                         result?.financialData?.returnOnEquity?.raw,

                    // Volatility
                    beta: result?.summaryDetail?.beta?.raw,

                    // Financial Totals
                    total_cash: result?.financialData?.totalCash?.raw,
                    total_cash_per_share:
                         result?.financialData?.totalCashPerShare?.raw,
                    total_debt: result?.financialData?.totalDebt?.raw,
                    total_revenue: result?.financialData?.totalRevenue?.raw,
               }),
               { onConflict: ["symbol"] }
          )
     );

     if (error) {
          console.error("Error inserting data into Supabase:", error);
     }
}

UpdateSupabaseViaApi();
