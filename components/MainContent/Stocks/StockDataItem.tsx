import React from "react";
import { formatSimpleNumber } from "@/utils/formatSimpleNumber";
import { formatPercentNumber } from "@/utils/formatPercentNumber";
import { shortenDescriptiveIndicator } from "@/utils/shortenDescriptiveIndicator";

interface StockDataListItemProps {
     indicator: string | number | undefined;
     type: string;
     isVisible: boolean;
}

export default function StockDataItem({
     indicator,
     type,
     isVisible,
}: StockDataListItemProps) {
     return (
          isVisible && (
               <>
                    <td className="pb-5 pt-5 text-kiwicolor8 min-w-36 max-w-36">
                         {indicator && (
                              <>
                                   {type === "numeric" &&
                                        formatSimpleNumber(indicator)}
                                   {type === "percentage" &&
                                        formatPercentNumber(indicator)}
                                   {type === "descriptive" &&
                                        shortenDescriptiveIndicator(
                                             indicator,
                                             12
                                        )}
                              </>
                         )}
                    </td>
               </>
          )
     );
}
