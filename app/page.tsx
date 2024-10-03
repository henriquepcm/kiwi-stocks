import React from "react";
import Header from "@/components/MainContent/Header";
import DisplayModals from "@/components/Modals/DisplayModals";
import StoreProvider from "../lib/store/StoreProvider";
import MainContent from "@/components/MainContent/MainContent";

export default function LoadData() {
     return (
          <StoreProvider>
               <div className="flex flex-col w-screen h-screen">
                    <DisplayModals />
                    <Header />
                    <MainContent />
               </div>
          </StoreProvider>
     );
}
