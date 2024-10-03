"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIndicatorVisibility } from "@/lib/store/indicatorsSlice/indicatorsSlice";
import { IndicatorsState } from "@/lib/store/indicatorsSlice/indicatorsSliceTypes";
import { AppDispatch } from "@/lib/store/store";

interface CheckboxItemProps {
     label: string;
     indicator: keyof IndicatorsState;
     isChecked: boolean;
}

export default function CheckboxItem({
     label,
     indicator,
     isChecked,
}: CheckboxItemProps) {
     const [isMarked, setIsMarked] = useState<boolean>(isChecked);
     const dispatch = useDispatch<AppDispatch>();

     const handleCheckboxState = (): void => {
          setIsMarked((prev) => !prev);
          dispatch(setIndicatorVisibility({ indicator }));
     };

     return (
          <li className="flex gap-3 h-10 items-center hover:cursor-pointer">
               <input
                    type="checkbox"
                    id={label}
                    className="hidden"
                    checked={isMarked}
                    readOnly
               />
               <label htmlFor={label}>
                    <FontAwesomeIcon
                         icon={isMarked ? faSquareCheck : faSquare}
                         className="transition duration-300 hover:scale-75 hover:cursor-pointer"
                         onClick={handleCheckboxState}
                    />
               </label>
               <span className="capitalize" onClick={handleCheckboxState}>
                    {label}
               </span>
          </li>
     );
}
