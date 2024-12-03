import { useEffect, RefObject } from "react";

export const useOutsideClick = (
     ref1: RefObject<HTMLElement>,
     ref2: RefObject<SVGSVGElement>,
     callback: () => void
) => {
     useEffect(() => {
          const handleClickOutside = (event: MouseEvent | TouchEvent) => {
               const target = event.target as HTMLElement;

               if (
                    ref1.current &&
                    !ref1.current.contains(target) &&
                    ref2.current &&
                    !ref2.current.contains(target)
               ) {
                    callback();
               }
          };
          document.addEventListener("mousedown", handleClickOutside);
          document.addEventListener("touchstart", handleClickOutside);

          return () => {
               document.removeEventListener("mousedown", handleClickOutside);
               document.removeEventListener("touchstart", handleClickOutside);
          };
     }, [ref1, ref2, callback]);
};
