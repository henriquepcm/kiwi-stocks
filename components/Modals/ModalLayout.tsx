import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { reset } from "@/lib/store/modalsAndMenuSlice/modalsAndMenuSlice";
import { AppDispatch } from "@/lib/store/store";

interface ModalProps {
     title: string;
     children: React.ReactNode;
}

const ModalLayout = ({ title, children }: ModalProps) => {
     const dispatch = useDispatch<AppDispatch>();

     return (
          <div
               onClick={() => dispatch(reset())}
               className="flex flex-col pt-5 pb-5 top-0 right-0 bottom-0 left-0 items-center bg-kiwicolor1 fixed z-50 overflow-auto overflow-x-hidden scrollbar-thin scrollbar-track-kiwicolor1 scrollbar-thumb-kiwicolor2"
          >
               <div
                    className="flex justify-center items-center w-[85%] xl:w-[60%]"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                         e.stopPropagation()
                    }
               >
                    <button
                         aria-label="Close modal"
                         className="fixed top-[1.1rem] right-2"
                         onClick={() => dispatch(reset())}
                    >
                         <FontAwesomeIcon
                              icon={faXmark}
                              className="text-2xl w-6 h-10 p-2 transition duration-300 border border-kiwicolor1 rounded-full hover:border-kiwicolor9 hover:text-kiwicolor9 hover:cursor-pointer"
                         />
                    </button>
                    <div className="flex flex-col w-screen items-center gap-10">
                         <h2 className="m-auto">{title}</h2>
                         {children}
                    </div>
               </div>
          </div>
     );
};
export default ModalLayout;
