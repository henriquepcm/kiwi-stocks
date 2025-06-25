import { createClient } from "@supabase/supabase-js";
import { StocksApiResponse } from "@/scripts/stocksApiResponseSchema";
import yahooFinance from "yahoo-finance2";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
     throw new Error("Missing environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const symbols: string[] = [
     "ABCB4.SA",
     "AGRO3.SA",
     "BBAS3.SA",
     "BBSE3.SA",
     "BBDC3.SA",
     "BBDC4.SA",
     "BRAP4.SA",
     "BRBI11.SA",
     "BRSR6.SA",
     "CMIG4.SA",
     "CMIN3.SA",
     "CPFE3.SA",
     "CPLE3.SA",
     "CPLE6.SA",
     "CSMG3.SA",
     "CSNA3.SA",
     "CXSE3.SA",
     "CURY3.SA",
     "DIRR3.SA",
     "EGIE3.SA",
     "EVEN3.SA",
     "FESA4.SA",
     "FLRY3.SA",
     "GGBR4.SA",
     "GOAU4.SA",
     "GRND3.SA",
     "ISAE4.SA",
     "ITSA4.SA",
     "ITUB3.SA",
     "ITUB4.SA",
     "JHSF3.SA",
     "JSLG3.SA",
     "KEPL3.SA",
     "KLBN11.SA",
     "LAVV3.SA",
     "LEVE3.SA",
     "MRFG3.SA",
     "ODPV3.SA",
     "PETR3.SA",
     "PETR4.SA",
     "PLPL3.SA",
     "POMO4.SA",
     "RANI3.SA",
     "SAPR11.SA",
     "STBP3.SA",
     "SYNE3.SA",
     "TAEE11.SA",
     "TGMA3.SA",
     "TIMS3.SA",
     "UNIP6.SA",
     "VALE3.SA",
     "VLID3.SA",
     "VULC3.SA",
];

export async function UpdateSupabaseViaApi(): Promise<void> {
     const results: StocksApiResponse[] = [];
     //Prevent hitting API rate limits:  one request (with 5 symbols) per second
     for (let i = 0; i < symbols.length; i += 5) {
          const batch = symbols.slice(i, i + 5);

          try {
               console.log("Starting fetch...");
               const response = await yahooFinance.quote(batch);
               results.push(...response);
          } catch (error) {
               console.log("ERROR!", error);
          }
          if (i + 5 < symbols.length) {
               await new Promise((resolve) => setTimeout(resolve, 1000));
          }
     }

     // Insert the results into the Supabase table
     const { error } = await supabase.from("stocks_data").upsert(
          results.map(
               (stock) => ({
                    // General
                    symbol: stock?.symbol,
                    dividend_yield: stock?.dividendYield,
                    eps_trailing_twelve_months: stock?.epsTrailingTwelveMonths,
                    fifty_two_week_range_low: stock?.fiftyTwoWeekRange?.low,
                    fifty_two_week_range_high: stock?.fiftyTwoWeekRange?.high,
                    forward_pe: stock?.forwardPE,
                    market_cap: stock?.marketCap,
                    price_to_book: stock?.priceToBook,
                    regular_market_price: stock?.regularMarketPrice,
                    regular_market_volume: stock?.regularMarketVolume,
                    trailing_pe: stock?.trailingPE,
               }),
               { onConflict: ["symbol"] }
          )
     );

     if (error) {
          console.error("Error inserting data into Supabase:", error);
     }
}
