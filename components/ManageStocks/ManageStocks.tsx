import React from "react";
import FormInput from "@/components/ManageStocks/FormInput";
import ModalLayout from "../Modals/ModalLayout";
import StockCardItemList from "./StockCardItemList";

export default function ManageStocks() {
     return (
          <ModalLayout title="Manage Stocks">
               <div className="flex flex-col w-96">
                    <FormInput />
                    <StockCardItemList />
               </div>
          </ModalLayout>
     );
}
