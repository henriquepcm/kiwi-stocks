import { StocksState } from "@/lib/store/stocksSlice/stocksSliceTypes";
import { createClient, PostgrestError } from "@supabase/supabase-js";

//export const revalidate = 60;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
     throw new Error("Check supabase URL and supabase key.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getSupabaseData(): Promise<StocksState | string | null> {
     const {
          data: stocks_data,
          error,
     }: { data: StocksState | string | null; error: PostgrestError | null } =
          await supabase.from("stocks_data").select("*");

     if (error) {
          return "Error fetching data";
     }

     return stocks_data;
}
