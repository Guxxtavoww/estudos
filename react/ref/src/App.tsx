import React, { useCallback, useEffect, useRef, useState } from "react";

import Modal from "./components/Modal";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <button onClick={() => setIsModalOpen(true)} type="button">Open modal</button>
      {isModalOpen ? (
        <Modal
          handleClose={() => setIsModalOpen(false)}
          closeWhenClickOutside
        />
      ) : null}
    </form>
  );
};

export default App;
