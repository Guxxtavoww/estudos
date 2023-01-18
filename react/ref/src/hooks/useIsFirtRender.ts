import { useRef } from 'react';

function isFirstRender(): boolean {
  const isFirstRenderRef = useRef<boolean>(true);

  if (isFirstRenderRef.current) {
    isFirstRenderRef.current = false;

    return true;
  }

  return isFirstRenderRef.current;
}

export default isFirstRender;
