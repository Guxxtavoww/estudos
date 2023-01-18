import { useState, useEffect, useCallback } from 'react';

export function useClickOutside(
  currentRef: React.RefObject<HTMLElement>
): boolean {
  const [isClickedOutside, setIsClickedOutside] = useState<boolean>(false);

  const handleDocumentClick = useCallback(
    (e: MouseEvent) => {
      const isBeingClicked: boolean | undefined = currentRef.current?.contains(
        e.target as Node
      );

      return setIsClickedOutside(!!isBeingClicked);
    },
    [currentRef]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);

    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, [handleDocumentClick]);

  return isClickedOutside;
}
