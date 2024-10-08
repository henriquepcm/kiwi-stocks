"use client";

import React from "react";
import Menu from "../Menu/Menu";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "@/lib/store/modalsAndMenuSlice/modalsAndMenuSlice";
import { AppDispatch, RootState } from "@/lib/store/store";
import { useRef } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function Header() {
     const dispatch: AppDispatch = useDispatch();
     const isMenuOpen = useSelector(
          (state: RootState) => state.modalsAndMenu.menu.isOpen
     );
     const menuRef = useRef<HTMLUListElement | null>(null);
     const ellipsisRef = useRef<SVGSVGElement | null>(null);

     useOutsideClick(menuRef, ellipsisRef, () => dispatch(toggleMenu()));

     return (
          <>
               {isMenuOpen && <Menu ref={menuRef} />}
               <div className="flex flex-row pt-5 pl-5 pb-7 pr-5 bg-kiwicolor1 z-40">
                    <div>
                         <Image
                              src="/images/kiwi-logo@3x.png"
                              width={70}
                              height={36}
                              alt="Kiwi logo"
                         />
                    </div>
                    <div className="ml-5 mt-[0.6rem]">
                         <h1>Compare Stocks</h1>
                    </div>
                    <button
                         aria-label="Open menu"
                         className="ml-auto transition duration-300 text-kiwicolor8 hover:text-kiwicolor9 hover:cursor-pointer absolute top-7 right-5"
                         onClick={() => dispatch(toggleMenu())}
                    >
                         <FontAwesomeIcon
                              ref={ellipsisRef}
                              icon={faEllipsisVertical}
                              size="lg"
                         />
                    </button>
               </div>
          </>
     );
}
