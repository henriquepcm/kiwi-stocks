import { getSupabaseData } from "@/utils/getSupabaseData";
import { useState, useEffect } from "react";
import { StocksState } from "@/lib/store/stocksSlice/stocksSliceTypes";

export interface useSupabaseDataProps {
     supabaseData: StocksState | string | null;
     isLoading: boolean;
}

export function useSupabaseData(): useSupabaseDataProps {
     const [supabaseData, setSupabaseData] =
          useState<useSupabaseDataProps["supabaseData"]>(null);
     const [isLoading, setIsLoading] =
          useState<useSupabaseDataProps["isLoading"]>(true);

     useEffect(() => {
          async function fetchData() {
               const data: useSupabaseDataProps["supabaseData"] =
                    await getSupabaseData();
               setSupabaseData(data);
               setIsLoading(false);
          }

          fetchData();
     }, []);

     return { supabaseData, isLoading };
}
