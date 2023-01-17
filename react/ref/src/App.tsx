import React, { useCallback, useEffect, useRef } from "react";

import { useClickOutside } from "./hooks/useClickOutside";

const App: React.FC = () => {
  const renderCountRef = useRef<number>(0);
  const elRef = useRef<HTMLElement>(null);
  const loginInputRef = useRef<HTMLInputElement>(null);

  const isClickedOutside = useClickOutside(elRef);

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log({ loginValue: loginInputRef.current?.value });
    },
    []
  );

  useEffect(() => {
    renderCountRef.current = renderCountRef.current++;
  });

  useEffect(() => {
    console.log(isClickedOutside);
    alert(
      isClickedOutside
        ? "Voce clicou fora do texto de render"
        : "Clicou dentro"
    );
  }, [isClickedOutside]);

  return (
    <form className="app_wrapper" onSubmit={handleFormSubmit}>
      <input className="s" ref={loginInputRef} />
      <span ref={elRef}>Renderizou {renderCountRef.current} vezes</span>
    </form>
  );
};

export default App;
