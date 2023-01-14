import React, { useCallback, useRef } from "react";

const App: React.FC = () => {
  const loginInputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log({ loginValue: loginInputRef.current?.value });
    },
    []
  );

  return (
    <form className="app_wrapper" onSubmit={handleFormSubmit}>
      <input className="s" ref={loginInputRef} />
    </form>
  );
};

export default App;
