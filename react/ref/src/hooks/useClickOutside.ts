import { useState, useEffect, useCallback } from "react";

export function useClickOutside(currentRef: React.RefObject<HTMLElement>) {
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  const handleDocumentClick = useCallback((e: MouseEvent) => {
    if (!currentRef.current?.contains(e.target as Node)) {
      setIsClickedOutside(true);
      return;
    }
    setIsClickedOutside(false);
  }, [currentRef]);

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);

    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  return { isClickedOutside };
}
