"use client";
import React from "react";
import { useRef } from "react";
import Footer from "./Footer";
import StickySymbolsColumn from "../Stickies/StickySymbolsColumn";
import StickyIndicatorsRow from "../Stickies/StickyIndicatorsRow";
import IndicatorsAndStocksTable from "./IndicatorsAndStocksTable";

export default function MainContent() {
     const scrollContainerRef = useRef<HTMLDivElement | null>(null);
     return (
          <>
               <StickySymbolsColumn ref={scrollContainerRef} />
               <StickyIndicatorsRow ref={scrollContainerRef} />
               <div
                    ref={scrollContainerRef}
                    className="relative flex flex-col w-screen h-screen pb-20 pl-5 pr-5 overflow-auto scrollbar-thin scrollbar-track-kiwicolor2 scrollbar-thumb-kiwicolor4 bg-kiwicolor2"
               >
                    <IndicatorsAndStocksTable />
                    <Footer />
               </div>
          </>
     );
}
