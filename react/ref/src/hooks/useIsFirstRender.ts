import { useRef } from 'react';

function useIsFirstRender(): boolean {
  const isFirstRenderRef = useRef<boolean>(true);

  if (isFirstRenderRef.current) {
    isFirstRenderRef.current = false;

    return true;
  }

  return isFirstRenderRef.current;
}

export default useIsFirstRender;
