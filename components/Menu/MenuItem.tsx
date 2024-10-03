import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleModal } from "@/lib/store/modalsAndMenuSlice/modalsAndMenuSlice";
import { useDispatch } from "react-redux";
import { ModalsAndMenuState } from "@/lib/store/modalsAndMenuSlice/modalsAndMenuSliceType";
import { AppDispatch } from "@/lib/store/store";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface MenuItemProps {
     icon: IconProp;
     label: string;
     isActive: boolean;
}

export default function MenuItem({ icon, label, isActive }: MenuItemProps) {
     const dispatch = useDispatch<AppDispatch>();

     const getModalName = (): keyof ModalsAndMenuState | undefined => {
          if (label === "Add stocks" || label === "Manage stocks") {
               return "manageStocks";
          }
          if (label === "Add indicators" || label === "Manage indicators") {
               return "manageIndicators";
          }
          return undefined;
     };

     const modalName = getModalName();

     return (
          isActive && (
               <li
                    className="flex flex-row gap-3 items-center h-16 p-6 border-b-[0.05rem] border-kiwicolor2 text-kiwicolor8 hover:cursor-pointer hover:text-kiwicolor9 group"
                    onClick={() => {
                         if (modalName) {
                              dispatch(
                                   toggleModal({
                                        modalName,
                                        isOpen: true,
                                   })
                              );
                         }
                    }}
               >
                    <span className="transition duration-300 group-hover:translate-x-1">
                         <FontAwesomeIcon icon={icon} size="sm" />
                    </span>
                    <span className="transition duration-300 group-hover:translate-x-2">
                         {label}
                    </span>
               </li>
          )
     );
}
