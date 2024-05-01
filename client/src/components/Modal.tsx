import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children }: { children: ReactNode }) => {
  const elRef = useRef<null | Element>(null);
  if (elRef !== null) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal") as HTMLElement;
    if (elRef.current) {
      modalRoot.appendChild(elRef.current);
    }
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return elRef.current && createPortal(children, elRef.current);
};

export default Modal;
