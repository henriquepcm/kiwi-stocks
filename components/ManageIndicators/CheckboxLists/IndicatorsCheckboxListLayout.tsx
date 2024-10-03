import React from "react";
import DivisionBar from "@/components/MainContent/DivisionBar";

interface IndicatorsCheckboxListLayoutProps {
     title: string;
     children: React.ReactNode;
}

export default function IndicatorsCheckboxListLayout({
     title,
     children,
}: IndicatorsCheckboxListLayoutProps) {
     return (
          <>
               <div className="grid sm:grid-cols-2">
                    <h3>{title}</h3>
                    <ul>{children}</ul>
               </div>
               <DivisionBar />
          </>
     );
}
