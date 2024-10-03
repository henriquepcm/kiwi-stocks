import { sortStocks } from "@/lib/store/stocksSlice/stocksSlice";
import { useState, useCallback } from "react";
import { setIndicatorActiveState } from "@/lib/store/indicatorsSlice/indicatorsSlice";
import { useDispatch } from "react-redux";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";
import { AppDispatch } from "@/lib/store/store";

interface useIndicatorSort {
     handleSort: (indicator: keyof IndicatorsState) => void;
}

export const useIndicatorSort = (): useIndicatorSort => {
     const [toggleOrder, setToggleOrder] = useState<boolean>(true);
     const dispatch = useDispatch<AppDispatch>();

     const handleSort = useCallback(
          (indicator: keyof IndicatorsState) => {
               setToggleOrder((prev) => !prev);
               dispatch(sortStocks({ indicator, toggleOrder }));
               dispatch(setIndicatorActiveState({ indicator }));
          },
          [dispatch, toggleOrder]
     );

     return { handleSort };
};
