"use client";

import { RootState } from "@/lib/store/store";
import ManageIndicators from "../ManageIndicators/ManageIndicators";
import ManageStocks from "../ManageStocks/ManageStocks";
import { useSelector } from "react-redux";

export default function DisplayModals() {
     const isManageStocksOpen = useSelector(
          (state: RootState) => state.modalsAndMenu.manageStocks.isOpen
     );
     const isManageIndicatorsOpen = useSelector(
          (state: RootState) => state.modalsAndMenu.manageIndicators.isOpen
     );

     return (
          <>
               {isManageStocksOpen && <ManageStocks />}
               {isManageIndicatorsOpen && <ManageIndicators />}
          </>
     );
}
