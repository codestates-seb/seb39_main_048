import { useEffect, useState, useRef } from "react";

const useDetectClose = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  const handleOpen = () => {
      setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (e) => {
      // 현재 ref가 null이 아니고 e.target을 포함하고 있을때
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };
    // 왜 리턴을 removeEventListener
    if (isOpen) window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [isOpen]);

  return [isOpen, ref, handleOpen];
};

export default useDetectClose;
