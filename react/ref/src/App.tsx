import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  lazy,
  Suspense,
} from "react";

const Modal = lazy(() => import("./components/Modal"));

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
    <Suspense fallback={<h2>Loading...</h2>}>
      <form className="app_wrapper" onSubmit={handleFormSubmit}>
        <input className="s" ref={loginInputRef} />
        <span>Renderizou {renderCountRef.current} vezes</span>
        <button onClick={() => setIsModalOpen(true)} type="button">
          Open modal
        </button>
        {isModalOpen ? (
          <Modal
            handleClose={() => setIsModalOpen(false)}
            closeWhenClickOutside
          />
        ) : null}
      </form>
    </Suspense>
  );
};

export default App;
