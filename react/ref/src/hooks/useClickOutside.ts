import React, { useState, useEffect, useCallback } from "react";

function useClickOutside(
  currentRef: React.RefObject<HTMLElement>
): boolean {
  const [isClickedOutside, setIsClickedOutside] = useState<boolean>(false);

  const handleDocumentClick = useCallback(
    (e: MouseEvent) => {
      const clickedOutside = !currentRef.current?.contains(
        e.target as Node
      );

      return setIsClickedOutside(clickedOutside);
    },
    [currentRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);

    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, [handleDocumentClick]);

  return isClickedOutside;
}

export default useClickOutside;
