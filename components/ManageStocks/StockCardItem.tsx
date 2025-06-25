import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface StockCardProps {
     symbol: string;
     onClick: () => void;
}

export default function StockCardItem({ symbol, onClick }: StockCardProps) {
     return (
          <li className="flex flex-col h-24 bg-kiwicolor2 pl-6 pt-2 pb-3 transition duration-300 group hover:cursor-default hover:bg-kiwicolor1 border-[0.1rem] border-kiwicolor1 hover:border-kiwicolor3">
               <div className="flex justify-end pr-3">
                    <FontAwesomeIcon
                         icon={faXmark}
                         className="text-1xl transition duration-300 hover:border-kiwicolor9 hover:text-kiwicolor9 hover:cursor-pointer"
                         onClick={onClick}
                    />
               </div>
               <span className="uppercase font-medium text-kiwicolor8 transition duration-300 group-hover:translate-x-2">
                    {symbol}
               </span>
          </li>
     );
}
