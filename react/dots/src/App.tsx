import React, { useCallback, useState } from "react";

import Dot from "./components/Dot";
import GlobalStyles from "./styles/global";

interface IDot {
  xLocation: number;
  yLocation: number;
}

const App: React.FC = () => {
  const [dots, setDots] = useState<IDot[]>([]);
  const [previousDot, setPreviousDot] = useState<IDot>({} as IDot);

  const handleAddDot = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { clientX: xLocation, clientY: yLocation } = event;

      const newDot: IDot = { xLocation, yLocation };

      setPreviousDot(newDot);

      setDots((prevState) => {
        const hasDotOnSameLocation = prevState.find(
          (dot) => dot.xLocation === xLocation && dot.yLocation === yLocation
        );

        if (hasDotOnSameLocation) return prevState;

        return [...prevState, newDot];
      });
    },
    []
  );

  const handleUndoDot = useCallback(() => {
    setDots(dots.filter((dot) => dot !== previousDot));

    setPreviousDot(dots[dots.length - 1]);
  }, [dots, previousDot]);

  const handleRedoDot = useCallback(() => {
    setDots((prevState) => [...prevState, previousDot]);

    setPreviousDot(dots[dots.length - 1]);
  }, [dots, previousDot]);

  return (
    <>
      <div className="app_wrapper">
        <div className="dots_container" onClick={handleAddDot}>
          {dots.length
            ? dots.map((dot, index) => <Dot {...dot} key={index} />)
            : null}
        </div>
        <div className="controls_container">
          {dots.length ? (
            <>
              <button onClick={handleUndoDot}>Desfazer</button>
              <button onClick={handleRedoDot}>Refazer</button>
            </>
          ) : null}
        </div>
      </div>
      <GlobalStyles />
    </>
  );
};

export default App;
