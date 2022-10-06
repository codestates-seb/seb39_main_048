import { useEffect, useState, useRef } from "react";

const useDetectClose = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  const handleOpen = () => {
      setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen) window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [isOpen]);

  return [isOpen, ref, handleOpen, setIsOpen];
};

export default useDetectClose;
