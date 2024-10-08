import React from "react";
import { RootState } from "@/lib/store/store";
import { formatTimestamp } from "@/utils/formatTimestamp";
import { useSelector } from "react-redux";

export default function Footer() {
     const rawLastUpdatedTimestamp = useSelector((state: RootState) => {
          return state.stocks.length > 0 ? state.stocks[0].created_at : null;
     });

     const finalLasTUpdatedTimeStamp =
          rawLastUpdatedTimestamp && formatTimestamp(rawLastUpdatedTimestamp);

     return (
          <div className="flex flex-col gap-4 text-sm mt-auto pt-10 tracking-wider">
               <p>
                    {finalLasTUpdatedTimeStamp && (
                         <span>
                              Data last updated on&nbsp;
                              <span className="font-medium">
                                   {finalLasTUpdatedTimeStamp}
                              </span>
                              .&nbsp;
                         </span>
                    )}
                    The data provided by this app may contain errors. Please do
                    not base any important decisions solely on this information.
                    Always verify details and seek professional advice.
               </p>
               <p>
                    Kiwi Compare Stocks by&nbsp;
                    <a
                         className="henry-footer-link"
                         data-replace="Henrique Pochmann"
                         href="https://henriquepcm.com/"
                         target="blank"
                    >
                         <span>Henrique Pochmann</span>
                    </a>
               </p>
          </div>
     );
}
