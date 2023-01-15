import React, { useCallback, useEffect, useRef } from "react";

const App: React.FC = () => {
  const renderCountRef = useRef<number>(0);
  const loginInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <form className="app_wrapper" onSubmit={handleFormSubmit}>
      <input className="s" ref={loginInputRef} />
      <span>Renderizou {renderCountRef.current} vezes</span>
    </form>
  );
};

export default App;
